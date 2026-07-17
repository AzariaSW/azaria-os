export function getSorting(
  sort,
  order,
  allowedFields,
  defaultSort,
) {
  const direction = order === "desc" ? "desc" : "asc";

  if (allowedFields.includes(sort)) {
    return {
      [sort]: direction,
    };
  }

  return defaultSort;
}