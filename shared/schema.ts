import { pgTable, text, serial, integer, boolean, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  name: text("name").notNull(),
  level: text("level").notNull().default('beginner'),
  weeklyGoal: integer("weekly_goal").notNull().default(3),
});

export const workouts = pgTable("workouts", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  type: text("type").notNull(),
  distance: integer("distance"), // in meters
  duration: integer("duration"), // in seconds
  date: timestamp("date").notNull(),
  route: jsonb("route"), // GPS coordinates array
  completed: boolean("completed").notNull().default(false),
});

export const aiChats = pgTable("ai_chats", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  message: text("message").notNull(),
  response: text("response").notNull(),
  timestamp: timestamp("timestamp").notNull(),
});

export const insertUserSchema = createInsertSchema(users).omit({ id: true });
export const insertWorkoutSchema = createInsertSchema(workouts).omit({ id: true });
export const insertChatSchema = createInsertSchema(aiChats).omit({ id: true });

export type User = typeof users.$inferSelect;
export type Workout = typeof workouts.$inferSelect;
export type AiChat = typeof aiChats.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;
export type InsertWorkout = z.infer<typeof insertWorkoutSchema>;
export type InsertChat = z.infer<typeof insertChatSchema>;

