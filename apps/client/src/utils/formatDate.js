export default function formatDate(date) {
  if (!date) {
    return "Unknown";
  }

  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}