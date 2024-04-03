import * as bcrypt from 'bcrypt';

export const hashString = async (text: string) => {
  const salt = await bcrypt.genSalt();
  return bcrypt.hash(text, salt);
};

export const compareHash = async (text: string, hash: string) => {
  return bcrypt.compare(text, hash);
};
