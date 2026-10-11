export function ImagePlaceholder({ className = "" }: { className?: string }) {
  return <div className={`image-placeholder ${className}`} aria-hidden="true" />;
}
