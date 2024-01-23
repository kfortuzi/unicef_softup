export default <T, Key extends keyof T>(modelObject: T, keys: Key[]) => {
  return Object.fromEntries(
    Object.entries(modelObject as Record<string, unknown>).filter(
      ([key]) => !keys.includes(key as Key),
    ),
  );
};
