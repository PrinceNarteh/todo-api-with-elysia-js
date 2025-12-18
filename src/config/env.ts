import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const configSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  APP_PORT: z.string().transform(Number).default(4000),
  API_PREFIX: z.string().default("/api/v1"),
  DATABASE_URL: z.url(),
  JWT_SECRET: z.string().min(32),
  ALLOWED_ORIGINS: z.array(z.string()).default(["http://localhost:4000"]),
  API_VERSION: z.string().default("1.0.0"),
  APP_NAME: z.string().default("Todo API"),
});

export const config = configSchema.parse(process.env);
