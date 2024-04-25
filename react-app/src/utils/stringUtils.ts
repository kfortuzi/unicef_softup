const isValid = (input: unknown): boolean => {
  if (
    input === 'undefined'
    || input === 'null'
    || input === 'not provided'
    || input === '*'
    || input === 'N/A'
    || input === ' '
    || input === 'not specified'
    || input === '-'
    || input === 'unknown'
  )
    return false;
  
  return true;
};

const omitFalsyValue = (input: unknown): string => {
  if (!isValid(input)) return '';

  return input as string;
}

export { isValid, omitFalsyValue };