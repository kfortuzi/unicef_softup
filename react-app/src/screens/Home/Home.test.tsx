import { render, screen } from '@testing-library/react';

import Home from './Home';

jest.mock('react-i18next', () => {
  const originalModule = jest.requireActual('react-i18next');

  return {
    ...originalModule,
    useTranslation: () => ({
      t: (key: string) => key,
    }),
  };
});

describe('Home', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('renders screen header and content', () => {
    render(<Home />);

    expect(screen.getByText('header')).toBeInTheDocument();
    expect(screen.getByText('appDescription')).toBeInTheDocument();
  });
});
