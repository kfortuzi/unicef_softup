import exclude from './exclude';

describe('exclude.ts', () => {
  it('Should exculde the given keys from an object', () => {
    expect(
      exclude(
        {
          id: 1,
          name: 'Anon',
          password: '123',
        },
        ['password'],
      ),
    ).toEqual({
      id: 1,
      name: 'Anon',
    });
  });

  it('Should return the same object if no keys are specified', () => {
    expect(
      exclude(
        {
          id: 1,
          name: 'Anon',
        },
        [],
      ),
    ).toEqual({
      id: 1,
      name: 'Anon',
    });
  });
});
