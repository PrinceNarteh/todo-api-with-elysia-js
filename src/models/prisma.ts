import { PrismaClient } from "@prisma/client";
import { Config } from "../config";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log:
      Config.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });
