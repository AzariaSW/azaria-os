import ApiError from "./ApiError.js";
import { HTTP_STATUS } from "../constants/httpStatus.js";

export default function parseDate(dateString) {
  if (!dateString || typeof dateString !== "string") {
    throw new Error("Invalid date format");
  }

  // Accept / or - as separators
  const parts = dateString.split(/[\/-]/);

  if (parts.length !== 3) {
    throw new Error("Invalid date format. Expected dd/mm/yyyy or dd-mm-yyyy");
  }

  let [day, month, year] = parts;

  day = day.padStart(2, "0");
  month = month.padStart(2, "0");

  // Convert two-digit years
  if (year.length === 2) {
    year = Number(year);
    year = 2000 + year;
  }

  // Validate date
  const date = new Date(`${year}-${month}-${day}T00:00:00.000Z`);

  if (
    date.getUTCFullYear() !== Number(year) ||
    date.getUTCMonth() + 1 !== Number(month) ||
    date.getUTCDate() !== Number(day)
  ) {
    throw new Error("Invalid date value");
  }

  return date;
}
