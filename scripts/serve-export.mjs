import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const directory = resolve(fileURLToPath(new URL("../out/", import.meta.url)));
const port = Number(process.env.PORT || 3000);
const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".png": "image/png",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".pdf": "application/pdf",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ico": "image/x-icon",
};

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error("PORT must be an integer between 1 and 65535.");
}
await stat(resolve(directory, "index.html")).catch(() => {
  throw new Error("Static export not found. Run npm run build first.");
});

// This local preview serves only exported files; GitHub Pages hosts production.
const server = createServer(async (request, response) => {
  if (!["GET", "HEAD"].includes(request.method)) {
    response.writeHead(405, { Allow: "GET, HEAD" }).end();
    return;
  }

  let url;
  let pathname;
  try {
    url = new URL(request.url, "http://127.0.0.1");
    pathname = decodeURIComponent(url.pathname);
  } catch {
    response.writeHead(400).end();
    return;
  }

  let file = resolve(directory, `.${pathname}`);
  if ((file !== directory && !file.startsWith(`${directory}${sep}`)) || pathname.includes("\\") || pathname.includes("\0") ||
    pathname.split("/").some((segment) => segment.startsWith("."))) {
    response.writeHead(404).end();
    return;
  }

  try {
    if ((await stat(file)).isDirectory()) {
      if (!pathname.endsWith("/")) {
        response.writeHead(301, { Location: `${url.pathname}/${url.search}` }).end();
        return;
      }
      file = resolve(file, "index.html");
    }
    const body = await readFile(file);
    response.writeHead(200, { "Content-Type": contentTypes[extname(file)] || "application/octet-stream" });
    response.end(request.method === "HEAD" ? undefined : body);
  } catch {
    const body = await readFile(resolve(directory, "404.html"));
    response.writeHead(404, { "Content-Type": contentTypes[".html"] });
    response.end(request.method === "HEAD" ? undefined : body);
  }
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Static portfolio: http://127.0.0.1:${port}`);
});
