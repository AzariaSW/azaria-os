export default function formatDateRange(startDate, endDate) {
  if (!startDate) {
    return "Date unavailable";
  }
  
  const options = {
    month: "short",
    year: "numeric",
  };

  const start = new Date(startDate).toLocaleDateString("en-US", options);

  if (!endDate) {
    return `${start} - Present`;
  }

  const end = new Date(endDate).toLocaleDateString("en-US", options);

  return `${start} - ${end}`;
}