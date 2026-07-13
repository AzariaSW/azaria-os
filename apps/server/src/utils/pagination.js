import { PAGINATION } from "../constants/pagination.js";

export function getPaginationMeta(
  page,

  limit,

  total,
) {
  return {
    page,

    limit,

    total,

    totalPages: Math.ceil(total / limit),
  };
}

export function getPagination(pageQuery, limitQuery) {
  const page = Math.max(Number(pageQuery) || PAGINATION.DEFAULT_PAGE, 1);

  const limit = Math.min(
    Number(limitQuery) || PAGINATION.DEFAULT_LIMIT,

    PAGINATION.MAX_LIMIT,
  );

  return {
    page,

    limit,

    skip: (page - 1) * limit,
  };
}
