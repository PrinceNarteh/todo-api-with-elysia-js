import { config } from "@/config/env";
import { Elysia } from "elysia";

const app = new Elysia().get("/", () => "Hello Elysia").listen(config.APP_PORT);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
