import { LocalStorageKey, saveItem } from 'src/utils/storage';

const setUserSessionToken = (accessToken: string) => {
  // expiration 1 day
  const expirationInMilliseconds = 1000 * 60 * 60 * 24;

  saveItem(LocalStorageKey.USER_SESSION_TOKEN, accessToken, expirationInMilliseconds);
};

export default setUserSessionToken;
