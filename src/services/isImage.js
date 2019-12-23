export default function isImage(url) {
  if (
    url.includes("png") ||
    url.includes("PNG") ||
    url.includes("jpg") ||
    url.includes("JPG") ||
    url.includes("jpeg") ||
    url.includes("JPEG")
  ) {
    return true;
  }
  return false;
}
