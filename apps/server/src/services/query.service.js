import prisma from "../prisma/client.js";

import { getPagination, getPaginationMeta } from "../utils/pagination.js";
import { getSorting } from "../utils/sorting.js";

export async function queryBuilder({
  model,
  query,
  where = {},
  allowedSortFields = [],
  defaultSort,
}) {
  const { page, limit, skip } = getPagination(
    query.page,
    query.limit,
  );

  const orderBy = getSorting(
    query.sort,
    query.order,
    allowedSortFields,
    defaultSort,
  );

  const [total, items] = await prisma.$transaction([
    model.count({
      where,
    }),

    model.findMany({
      where,
      skip,
      take: limit,
      orderBy,
    }),
  ]);

  return {
    items,

    pagination: getPaginationMeta(
      page,
      limit,
      total,
    ),
  };
}