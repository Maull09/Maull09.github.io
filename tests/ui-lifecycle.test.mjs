import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { runInNewContext } from "node:vm";
import ts from "typescript";

const jsxRuntime = { jsx: (type, props) => ({ type, props }), jsxs: (type, props) => ({ type, props }) };

function evaluate(file, dependencies, globals = {}) {
  const exports = {};
  const code = ts.transpileModule(readFileSync(file, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX },
  }).outputText;
  runInNewContext(code, { exports, ...globals, require: (name) => {
    assert(name in dependencies, `Unexpected dependency: ${name}`);
    return dependencies[name];
  } });
  return exports;
}

function mountMarquee() {
  const refs = [];
  const effects = [];
  const updates = [];
  const observers = [];
  class Observer {
    targets = [];
    disconnected = false;
    constructor(callback) { this.callback = callback; observers.push(this); }
    observe(target) { assert(target); this.targets.push(target); }
    deliverResize(width) {
      this.callback(this.targets.map((target) => ({ target, borderBoxSize: [{ inlineSize: width }] })));
    }
    disconnect() { this.disconnected = true; }
  }
  const { Marquee } = evaluate("src/components/ui/marquee.tsx", {
    "react/jsx-runtime": jsxRuntime,
    react: {
      useRef: (value) => { const ref = { current: value }; refs.push(ref); return ref; },
      useEffect: (effect) => effects.push(effect),
      useState: (value) => [value, (next) => updates.push(next)],
    },
  }, { IntersectionObserver: Observer, ResizeObserver: Observer });
  const tree = Marquee({ id: "focus", label: "Focus", variant: "focus", children: "Voice AI" });
  function attach(node) {
    if (!node || typeof node !== "object") return;
    if (Array.isArray(node)) { node.forEach(attach); return; }
    if (node.props.ref) node.props.ref.current = {
      clientWidth: 1000,
      getBoundingClientRect: () => { assert.fail("Marquee sizing must use ResizeObserver measurements"); },
    };
    attach(node.props.children);
  }
  attach(tree);
  return { refs, updates, observers, cleanup: effects.map((effect) => effect()) };
}

test("marquee callbacks safely handle detached refs and ignore deliveries after cleanup", () => {
  const mounted = mountMarquee();
  const [visibility, resize] = mounted.observers;
  visibility.callback([{ isIntersecting: true }]);
  resize.deliverResize(400);
  assert.equal(mounted.updates[0], true);
  assert.equal(mounted.updates[1].distance, 400);
  assert.equal(mounted.updates[1].copies, 3);
  mounted.refs.forEach((ref) => { ref.current = null; });
  assert.doesNotThrow(() => resize.deliverResize(0), "Refs can detach before passive effect cleanup");
  mounted.cleanup.forEach((cleanup) => cleanup());
  const count = mounted.updates.length;
  assert.doesNotThrow(() => resize.deliverResize(400));
  visibility.callback([{ isIntersecting: false }]);
  assert.equal(mounted.updates.length, count, "Queued callbacks do not update an unmounted marquee");
  assert(mounted.observers.every((observer) => observer.disconnected));
});

test("a remounted marquee measures its new elements and leaves old observers inactive", () => {
  const old = mountMarquee();
  old.cleanup.forEach((cleanup) => cleanup());
  old.refs.forEach((ref) => { ref.current = null; });
  const next = mountMarquee();
  next.observers[1].deliverResize(250);
  assert.equal(next.updates[0].distance, 250);
  assert.equal(next.updates[0].copies, 4);
  old.observers[1].deliverResize(400);
  old.observers[0].callback([{ isIntersecting: true }]);
  assert.equal(old.updates.length, 0);
  next.cleanup.forEach((cleanup) => cleanup());
});

test("marquee recalculates copies when only its viewport changes width", () => {
  const mounted = mountMarquee();
  const resize = mounted.observers[1];
  resize.deliverResize(400);
  const viewport = resize.targets[0];
  viewport.clientWidth = 1800;
  resize.callback([{ target: viewport, borderBoxSize: [{ inlineSize: 1800 }] }]);
  assert.equal(mounted.updates.at(-1).distance, 400);
  assert.equal(mounted.updates.at(-1).copies, 5);
  mounted.cleanup.forEach((cleanup) => cleanup());
});

test("theme initialization is inserted once by the server and renders no client script", () => {
  const callbacks = [];
  const effects = [];
  let restorations = 0;
  const dependencies = {
    "react/jsx-runtime": jsxRuntime,
    react: { useRef: (value) => ({ current: value }), useLayoutEffect: (effect, dependencies) => effects.push({ effect, dependencies }) },
    "next/navigation": { useServerInsertedHTML: (callback) => callbacks.push(callback) },
    "@/theme/theme": { themeInitializationScript: "initializeTheme();", initializeTheme: () => { restorations++; } },
  };
  const { ThemeInitializer } = evaluate("src/components/layout/theme-initializer.tsx", dependencies);
  assert.equal(ThemeInitializer({ locale: "id" }), null);
  assert.equal(callbacks.length, 1);
  const script = callbacks[0]();
  assert.equal(script.type, "script");
  assert.equal(script.props.id, "portfolio-theme-init");
  assert.equal(script.props.dangerouslySetInnerHTML.__html, "initializeTheme();");
  assert.equal(callbacks[0](), null, "Subsequent server flushes do not duplicate the script");
  dependencies["next/navigation"] = { useServerInsertedHTML: () => {} };
  const client = evaluate("src/components/layout/theme-initializer.tsx", dependencies);
  assert.equal(client.ThemeInitializer({ locale: "en" }), null, "Client navigation produces no executable script element");
  assert.equal(client.ThemeInitializer({ locale: "id" }), null);
  assert.equal(effects.map((entry) => entry.dependencies[0]).join(","), "id,en,id");
  effects.forEach((entry) => entry.effect());
  assert.equal(restorations, 3, "Each locale restores the theme in a layout effect before paint");
});

function languageNavigation() {
  const effects = [];
  const scrolls = [];
  const browser = { scrollY: 1800, headerHeight: 80, sections: [] };
  function element(top, height) {
    return { getBoundingClientRect: () => ({ top: top - browser.scrollY, bottom: top + height - browser.scrollY, height }) };
  }
  function section(id, top, height, blocks) {
    return { ...element(top, height), id, querySelectorAll: () => blocks };
  }
  const { LanguageSwitcher } = evaluate("src/components/layout/language-switcher.tsx", {
    "react/jsx-runtime": jsxRuntime,
    react: { useLayoutEffect: (effect) => effects.push(effect) },
    "next/link": { default: "link" },
    "@/i18n": { locales: ["id", "en"] },
  }, {
    document: {
      querySelector: () => ({ getBoundingClientRect: () => ({ bottom: browser.headerHeight }) }),
      querySelectorAll: () => browser.sections,
      getElementById: (id) => browser.sections.find((entry) => entry.id === id),
    },
    window: {
      get scrollY() { return browser.scrollY; },
      location: { hash: "#home" },
      scrollTo: (options) => { scrolls.push(options); browser.scrollY = options.top; },
    },
  });
  return {
    browser, scrolls, element, section,
    render: (locale) => LanguageSwitcher({ locale, label: "Language" }).props.children,
    flush: () => effects.splice(0).forEach((effect) => effect()),
  };
}

test("ID to EN and back preserves the reading position despite translated heights and a stale hash", () => {
  const page = languageNavigation();
  const idBlock = page.element(1750, 300);
  const enBlock = page.element(2250, 450);
  const idSections = [page.section("home", 0, 700, []), page.section("experience", 1600, 1200, [idBlock])];
  const enSections = [page.section("home", 0, 800, []), page.section("experience", 2100, 1500, [enBlock])];
  page.browser.sections = idSections;
  const idLinks = page.render("id");
  page.flush();
  assert(idLinks.every((link) => link.props.scroll === false));
  assert.equal(idLinks[1].props.href, "/en/", "Native links remain usable without JavaScript");
  idLinks[1].props.onNavigate();
  page.browser.sections = enSections;
  const enLinks = page.render("en");
  page.render("en"); // Desktop and mobile controls both mount in the new layout.
  page.flush();
  assert.equal(page.scrolls.length, 1, "Only one control restores the shared position");
  assert.equal(page.browser.scrollY, 2377);
  assert.equal(page.scrolls[0].behavior, "instant", "Global smooth scrolling must not animate language changes");
  assert.equal(enBlock.getBoundingClientRect().top + (154 / 300) * 450, 104);
  enLinks[0].props.onNavigate();
  page.browser.sections = idSections;
  page.render("id");
  page.flush();
  assert.equal(page.browser.scrollY, 1800);
});

test("language navigation preserves space above a heading and accounts for a changed mobile header", () => {
  const page = languageNavigation();
  page.browser.headerHeight = 300;
  page.browser.sections = [page.section("papers", 2050, 900, [page.element(2160, 50)])];
  const links = page.render("id");
  page.flush();
  links[1].props.onNavigate();
  page.browser.headerHeight = 80;
  page.browser.sections = [page.section("papers", 2400, 950, [page.element(2510, 70)])];
  page.render("en");
  page.flush();
  assert.equal(page.browser.scrollY, 2370);
  assert.equal(page.browser.sections[0].querySelectorAll()[0].getBoundingClientRect().top, 140);
});

test("initial visits and clicking the active language do not restore an unrelated scroll position", () => {
  const page = languageNavigation();
  page.browser.sections = [page.section("projects", 1600, 1200, [page.element(1750, 300)])];
  const links = page.render("id");
  page.flush();
  links[0].props.onNavigate();
  page.render("id");
  page.flush();
  assert.equal(page.scrolls.length, 0);
});
