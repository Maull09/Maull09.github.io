import type { LocalizedText } from "./localized-text";
import type { DocumentUrl } from "./document-url";

export type Credential = {
  id: string;
  title: LocalizedText;
  issuer: string;
  description: LocalizedText;
  year: string | null;
  url: DocumentUrl;
};
