export type DocumentUrl =
  | `https://${string}`
  | `/documents/${string}.pdf`
  | `/documents/${string}.png`;
