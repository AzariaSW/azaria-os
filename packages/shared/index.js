const { z } = require("zod");

const API = Object.freeze({
  VERSION: "v1",
});

const PAGINATION = Object.freeze({
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 10,
  MAX_LIMIT: 50,
});

const HTTP_STATUS = Object.freeze({
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  TOO_MANY_REQUESTS: 429,
  INTERNAL_SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
});

const LIMITS = Object.freeze({
  NAME_MAX: 100,
  TITLE_MAX: 150,
  SUBJECT_MAX: 200,
  SUMMARY_MAX: 1000,
  MESSAGE_MAX: 2000,
  BIO_MAX: 3000,
  USERNAME_MIN: 3,
  USERNAME_MAX: 50,
  PASSWORD_MIN: 8,
});

const schemas = Object.freeze({
  uuid: z.string().uuid(),
  email: z.string().email(),
  url: z.string().url(),
  nonEmptyString: z.string().trim().min(1),
  boolean: z.boolean(),
  paginationQuery: z.object({
    page: z.coerce.number().int().positive().default(PAGINATION.DEFAULT_PAGE),
    limit: z.coerce
      .number()
      .int()
      .positive()
      .max(PAGINATION.MAX_LIMIT)
      .default(PAGINATION.DEFAULT_LIMIT),
  }),
  idParams: z.object({
    id: z.string().uuid(),
  }),
  emptyParams: z.object({}),
  emptyQuery: z.object({}),
});

const requestSchemas = Object.freeze({
  id: z.object({
    params: schemas.idParams,
    query: schemas.emptyQuery,
  }),
  empty: z.object({
    body: z.object({}),
    params: schemas.emptyParams,
    query: schemas.emptyQuery,
  }),
});

exports.API = API;
exports.PAGINATION = PAGINATION;
exports.HTTP_STATUS = HTTP_STATUS;
exports.LIMITS = LIMITS;
exports.schemas = schemas;
exports.requestSchemas = requestSchemas;
