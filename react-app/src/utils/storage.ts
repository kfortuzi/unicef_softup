import dayjs from 'dayjs';

const prefix = 'akpa-ai';

export enum LocalStorageKey {
  SELECTED_LANGUAGE = `${prefix}-selected-language`,
  USER_SESSION_TOKEN = `${prefix}-user-session-token`,
  DAY_OF_TIP = `${prefix}-day-of-tip`,
  DISCLAIMER_ACCEPTED = `${prefix}-disclaimer-accepted`,
}

export const saveItem = <ValueType>(
  key: LocalStorageKey,
  value: ValueType,
  expirationInMilliseconds?: number,
) => {
  const entry: { value: ValueType; expiry?: number } = { value };

  if (expirationInMilliseconds) {
    entry.expiry = dayjs().valueOf() + expirationInMilliseconds;
  }

  localStorage.setItem(key, JSON.stringify(entry));
};

export const deleteItem = (key: LocalStorageKey): void => {
  localStorage.removeItem(key);
};

export const getItem = <ValueType>(key: LocalStorageKey) => {
  const item = localStorage.getItem(key);

  if (item) {
    const entry: { value: ValueType; expiry?: number } = JSON.parse(item);

    if (entry.expiry && dayjs().valueOf() > entry.expiry) {
      deleteItem(key);

      return null;
    }

    return entry.value;
  }

  return null;
};

export const clearStorage = () => {
  localStorage.clear();
};
