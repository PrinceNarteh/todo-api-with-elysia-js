import { config } from "@/config/env";

export const loggerInfo = (message: string, meta?: unknown) => {
  console.log(`[INFO] ${new Date().toISOString()} - ${message}`, meta || "");
};

export const loggerError = (message: string, error?: unknown) => {
  console.error(
    `[ERROR] ${new Date().toISOString()} - ${message}`,
    error || "",
  );
};

export const loggerWarn = (message: string, meta?: unknown) => {
  console.warn(`[WARN] ${new Date().toISOString()} - ${message}`, meta || "");
};

export const loggerDebug = (message: string, meta?: unknown) => {
  if (config.NODE_ENV === "development") {
    console.debug(
      `[DEBUG] ${new Date().toISOString()} - ${message}`,
      meta || "",
    );
  }
};
