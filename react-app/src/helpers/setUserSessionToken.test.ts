import * as storage from 'src/utils/storage';

import setUserSessionToken from './setUserSessionToken';

describe('setUserSessionToken', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('saves session token in local storage with 1 hour validity when remember is false', () => {
    const mockSaveItem = jest.spyOn(storage, 'saveItem');
    mockSaveItem.mockImplementation(jest.fn());

    setUserSessionToken('testToken', false);
    expect(mockSaveItem).toHaveBeenCalledWith(
      storage.LocalStorageKey.USER_SESSION_TOKEN,
      'testToken',
      1000 * 60 * 60,
    );
  });

  test('saves session token in local storage with 1 day validity when remember is true', () => {
    const mockSaveItem = jest.spyOn(storage, 'saveItem');
    mockSaveItem.mockImplementation(jest.fn());

    setUserSessionToken('testToken', true);
    expect(mockSaveItem).toHaveBeenCalledWith(
      storage.LocalStorageKey.USER_SESSION_TOKEN,
      'testToken',
      1000 * 60 * 60 * 24,
    );
  });
});
