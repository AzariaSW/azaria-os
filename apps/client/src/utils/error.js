export function getErrorMessage(error) {
  if (error?.response?.data?.message) {
    return error.response.data.message;
  }

  if (error?.message) {
    return error.message;
  }

  return "Something went wrong.";
}

export function isUnauthorized(error) {
  return error?.response?.status === 401;
}

export function isForbidden(error) {
  return error?.response?.status === 403;
}

export function isNotFound(error) {
  return error?.response?.status === 404;
}

export function isServerError(error) {
  return error?.response?.status >= 500;
}