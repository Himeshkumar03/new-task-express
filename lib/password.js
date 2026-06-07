import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

export const hashPassword = async (password) => {
  if (!password) throw new Error('Password is required');
  return bcrypt.hash(password, SALT_ROUNDS);
};

export const comparePassword = async (plainText, hashedPassword) => {
  if (!plainText || !hashedPassword) return false;
  return bcrypt.compare(plainText, hashedPassword);
};
