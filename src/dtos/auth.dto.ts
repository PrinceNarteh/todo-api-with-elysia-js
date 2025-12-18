import { Static } from "@sinclair/typebox";
import { t } from "elysia";

export const loginSchema = t.Object({
  email: t.String({ format: "email" }),
  password: t.String({ minLength: 6 }),
});

export const registerSchema = t.Object({
  firstName: t.String({ maxLength: 255 }),
  lastName: t.String({ maxLength: 255 }),
  middleName: t.Optional(t.String({ maxLength: 255 })),
  email: t.String({ format: "email" }),
  username: t.String({ minLength: 3, maxLength: 100 }),
  password: t.String({ minLength: 6 }),
});

export type LoginDto = Static<typeof loginSchema>;
export type RegisterDto = Static<typeof registerSchema>;
