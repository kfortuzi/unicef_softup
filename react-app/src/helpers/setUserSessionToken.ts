
import { LocalStorageKey, saveItem } from 'src/utils/storage';

const setUserSessionToken = (accessToken: string, remember = false) => {
  const expirationInMilliseconds = remember ? 1000 * 60 * 60 * 24 : 1000 * 60 * 60;

  saveItem(LocalStorageKey.USER_SESSION_TOKEN, accessToken, expirationInMilliseconds);
};

export default setUserSessionToken;
