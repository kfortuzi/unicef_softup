export const unique = <T>(array: T[], predicate: () => keyof T): T[] => {
  return array.reduce((acc, current) => {
    const map = {} as Record<keyof T, boolean>;
    const result = [...acc];

    if (map[predicate()]) {
      return result;
    } else {
      map[predicate()] = true;
      result.push(current);
    }

    return result;
  }, [] as T[]);
};
