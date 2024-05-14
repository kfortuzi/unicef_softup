export const isValidString = (input: unknown) => {
  if (
    input === 'undefined' ||
    input === 'null' ||
    input === 'not provided' ||
    input === '*' ||
    input === 'N/A' ||
    input === ' ' ||
    input === 'not specified' ||
    input === '-' ||
    input === 'unknown' ||
    input === '!' ||
    input === '?' ||
    input === '.' ||
    input === 'no value' ||
    input === '#'
  )
    return false;
  return !!input;
};
