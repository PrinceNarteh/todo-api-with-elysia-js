import { config } from "@/config/env";
import { User } from "@/db/schema/users.schema";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const hashedPassword = async (password: string): Promise<string> => {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
};

export const ComparePassword = async (
  plainPassword: string,
  hashedPassword: string,
): Promise<boolean> => {
  return bcrypt.compare(plainPassword, hashedPassword);
};

export const generateToken = (
  user: Pick<User, "id" | "email" | "username">,
): string => {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      username: user.email,
    },
    config.JWT_SECRET,
    { expiresIn: 60 * 60 * 24 * 7 },
  );
};

export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, config.JWT_SECRET);
  } catch {
    throw new Error("Invalid or expired token");
  }
};
