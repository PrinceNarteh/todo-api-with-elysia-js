import { Static, t } from "elysia";

// Tag schemas
export const createTagSchema = t.Object({
  name: t.String({ minLength: 1, maxLength: 50 }),
  color: t.Optional(
    t.String({ pattern: "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$" }),
  ),
});

export type CreateTagDto = Static<typeof createTagSchema>;
