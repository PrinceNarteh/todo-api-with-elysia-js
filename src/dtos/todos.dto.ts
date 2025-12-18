import { Static } from "@sinclair/typebox";
import { t } from "elysia";

enum Priority {
  Low = "low",
  Medium = "medium",
  High = "high",
  Urgent = "urgent",
}

export const createTodoDto = t.Object({
  title: t.String({ minLength: 1, maxLength: 255 }),
  description: t.Optional(t.String()),
  priority: t.Optional(t.Enum(Priority)),
  dueDate: t.Optional(t.String({ format: "date-time" })),
  tagIds: t.Optional(t.Array(t.Integer())),
});

export const updateTodoDto = t.Partial(createTodoDto);

export const todoQueryDto = t.Object({
  page: t.Optional(t.Integer({ minimum: 1, default: 1 })),
  limit: t.Optional(t.Integer({ minimum: 1, maximum: 100, default: 20 })),
  isCompleted: t.Optional(t.Boolean()),
  priority: t.Optional(t.Integer({ minimum: 1, maximum: 3 })),
  search: t.Optional(t.String()),
  sortBy: t.Optional(t.String()),
  sortOrder: t.Optional(t.String()),
});

export type CreateTodoDto = Static<typeof createTodoDto>;
export type UpdateTodoDto = Static<typeof updateTodoDto>;
export type TodoQueryDto = Static<typeof todoQueryDto>;
