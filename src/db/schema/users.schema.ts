import { relations } from "drizzle-orm";
import {
  boolean,
  pgTable,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { tags } from "./tags.schema";
import { todos } from "./todos.schema";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  firstName: varchar("first_name", { length: 255 }).notNull(),
  lastName: varchar("last_name", { length: 255 }).notNull(),
  middleName: varchar("middle_name", { length: 255 }),
  email: varchar("email", { length: 255 }).notNull().unique(),
  username: varchar("username", { length: 100 }).notNull().unique(),
  hashedPassword: varchar("hashed_password", { length: 255 }).notNull(),
  isActive: boolean().default(true),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const userRelations = relations(users, ({ many }) => ({
  todos: many(todos),
  tags: many(tags),
}));

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
