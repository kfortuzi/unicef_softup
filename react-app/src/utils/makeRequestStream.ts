import config from 'src/config';

import { LocalStorageKey, deleteItem, getItem } from './storage';

const makeRequestStream = async <ResponseType>(
  path: string,
  options: RequestInit = { method: 'GET' },
  requiresAuth = true,
): Promise<ResponseType | undefined | ReadableStream<Uint8Array> | null> => {
  let authorizationHeader: string | undefined;

  if (requiresAuth) {
    const accessToken = getItem<string>(LocalStorageKey.USER_SESSION_TOKEN);

    if (!accessToken) {
      window.location.href = '/';
    }

    authorizationHeader = `Bearer ${accessToken}`;
  }

  const url = `${config.API_BASE_URL}${path}`;
  const body = options.method === 'GET' ? undefined : options.body;
  const headers: HeadersInit & { Authorization?: string } = options.headers
    ? { 'Content-Type': 'application/json', ...options.headers }
    : { 'Content-Type': 'application/json' };

  if (requiresAuth && authorizationHeader) {
    headers.Authorization = authorizationHeader;
  }

  const response = await fetch(url, {
    ...options,
    headers,
    body,
  });

  // Check if the response is not successful and throw an meaningful error
  try {
    if (!response.ok) {
      if (response.status === 401) {
        deleteItem(LocalStorageKey.USER_SESSION_TOKEN);
        window.location.href = '/';
      }

      const responseBody = await response.json();
      if (responseBody?.message) {
        throw new Error(responseBody.message);
      }
      throw new Error(`${response.status}: ${response.statusText}`);
    }
  } catch (error: Error | unknown) {
    const errorMessage = (error as Error).message || 'Invalid response';
    throw new Error(errorMessage);
  }

  if (response.headers.get('Content-Length') === '0') {
    throw new Error('Invalid response');
  }

  return response.body;
};

export default makeRequestStream;
