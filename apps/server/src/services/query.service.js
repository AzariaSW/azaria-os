import prisma from "../prisma/client.js";

import { getPagination, getPaginationMeta } from "../utils/pagination.js";
import { getSorting } from "../utils/sorting.js";

const projectInclude = {
  images: {
    orderBy: {
      order: "asc",
    },
  },
};

export async function queryBuilder({
  model,
  query,
  where = {},
  allowedSortFields = [],
  defaultSort,
}) {
  const { page, limit, skip } = getPagination(query.page, query.limit);
  
  const orderBy = getSorting(
    query.sort,
    query.order,
    allowedSortFields,
    defaultSort,
  );
  
  const findManyOptions = {
    where,
    skip,
    take: limit,
    orderBy,
  };

  if (model === prisma.project) {
    findManyOptions.include = projectInclude;
  }

  const [total, items] = await prisma.$transaction([
    model.count({
      where,
    }),

    model.findMany(findManyOptions),
  ]);

  return {
    items,
    pagination: getPaginationMeta(page, limit, total),
  };
}
