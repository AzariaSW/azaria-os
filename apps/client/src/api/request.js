import client from "./client";

export async function get(url, config = {}) {
  const response = await client.get(url, config);

  return response.data.data;
}

export async function post(url, data, config = {}) {
  const response = await client.post(url, data, config);

  return response.data.data;
}

export async function put(url, data, config = {}) {
  const response = await client.put(url, data, config);

  return response.data.data;
}

export async function patch(url, config = {}) {
  const response = await client.patch(url, null, config);

  return response.data.data;
}

export async function remove(url, config = {}) {
  const response = await client.delete(url, config);

  return response.data.data;
}
