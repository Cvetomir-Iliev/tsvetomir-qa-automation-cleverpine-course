// Helper

export function getLocalUrl(relativePath, baseUrl = import.meta.url) {
  return new URL(relativePath, baseUrl).href;
}
