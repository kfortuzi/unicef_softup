import { cleanup, render, screen } from '@testing-library/react';

import * as useGetProfile from 'src/api/users/hooks/useGetProfile';

import PrivateRoute from './PrivateRoute';

jest.mock('react-i18next', () => {
  const originalModule = jest.requireActual('react-i18next');

  return {
    ...originalModule,
    useTranslation: () => ({
      t: (key: string) => key,
    }),
  };
});
jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');

  return {
    ...originalModule,
    Outlet: () => <>Outlet</>,
    Navigate: () => <>Navigate</>,
  };
});
jest.mock('src/components/common/LoadingFullPage/LoadingFullPage', () => ({
  __esModule: true,
  default: () => <>Loading...</>,
}));

describe('PrivateRoute', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.restoreAllMocks();
    cleanup();
  });

  test('renders protected routes content or navigates to login based on authorization data', () => {
    const mockUseGetProfile = jest.spyOn(useGetProfile, 'default');

    mockUseGetProfile.mockImplementation(
      jest
        .fn()
        .mockReturnValueOnce({
          data: null,
          isFetching: true,
        })
        .mockReturnValueOnce({
          data: { id: 1 },
          isFetching: false,
        })
        .mockReturnValueOnce({
          data: null,
          isFetching: false,
        }),
    );

    const { rerender } = render(<PrivateRoute />);
    expect(screen.getByText('Navigate')).toBeInTheDocument();

    rerender(<PrivateRoute />);
    expect(screen.getByText('Outlet')).toBeInTheDocument();

    rerender(<PrivateRoute />);
    expect(screen.getByText('Navigate')).toBeInTheDocument();
  });
});
