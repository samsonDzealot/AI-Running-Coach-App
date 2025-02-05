import {
  type User,
  type InsertUser,
  type Workout,
  type InsertWorkout,
  type AiChat,
  type InsertChat,
  users,
  workouts,
  aiChats,
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  // Users
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  updateUser(id: number, data: Partial<User>): Promise<User>;

  // Workouts
  getWorkouts(userId: number): Promise<Workout[]>;
  createWorkout(workout: InsertWorkout): Promise<Workout>;
  updateWorkout(id: number, data: Partial<Workout>): Promise<Workout>;

  // AI Chat
  getChatHistory(userId: number): Promise<AiChat[]>;
  saveChat(chat: InsertChat): Promise<AiChat>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async updateUser(id: number, data: Partial<User>): Promise<User> {
    const [user] = await db
      .update(users)
      .set(data)
      .where(eq(users.id, id))
      .returning();
    return user;
  }

  async getWorkouts(userId: number): Promise<Workout[]> {
    return db.select().from(workouts).where(eq(workouts.userId, userId));
  }

  async createWorkout(insertWorkout: InsertWorkout): Promise<Workout> {
    const [workout] = await db.insert(workouts).values(insertWorkout).returning();
    return workout;
  }

  async updateWorkout(id: number, data: Partial<Workout>): Promise<Workout> {
    const [workout] = await db
      .update(workouts)
      .set(data)
      .where(eq(workouts.id, id))
      .returning();
    return workout;
  }

  async getChatHistory(userId: number): Promise<AiChat[]> {
    return db.select().from(aiChats).where(eq(aiChats.userId, userId));
  }

  async saveChat(insertChat: InsertChat): Promise<AiChat> {
    const [chat] = await db.insert(aiChats).values(insertChat).returning();
    return chat;
  }
}

export const storage = new DatabaseStorage();