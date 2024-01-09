import config from 'src/config';

import { LocalStorageKey, getItem } from './storage';

const makeRequest = async <ResponseType>(
  path: string,
  options: RequestInit = { method: 'GET' },
  requiresAuth = true,
): Promise<ResponseType | undefined> => {
  let authorizationHeader: string | undefined;

  if (requiresAuth) {
    const accessToken = getItem<string>(LocalStorageKey.USER_SESSION_TOKEN);

    if (!accessToken) {
      throw new Error('Invalid request');
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

  if (!response.ok) {
    throw new Error(`${response.status}: ${response.statusText}`);
  }

  try {
    if (response.headers.get('Content-Length') !== '0') {
      const parsedData = await response.json();

      return parsedData;
    }
  } catch {
    throw new Error('Invalid response');
  }
};

export default makeRequest;
