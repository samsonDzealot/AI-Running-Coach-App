import {
  type User,
  type InsertUser,
  type Workout,
  type InsertWorkout,
  type AiChat,
  type InsertChat,
} from "@shared/schema";

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

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private workouts: Map<number, Workout>;
  private chats: Map<number, AiChat>;
  private currentId: { users: number; workouts: number; chats: number };

  constructor() {
    this.users = new Map();
    this.workouts = new Map();
    this.chats = new Map();
    this.currentId = { users: 1, workouts: 1, chats: 1 };
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId.users++;
    const user = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async updateUser(id: number, data: Partial<User>): Promise<User> {
    const user = await this.getUser(id);
    if (!user) throw new Error("User not found");
    const updated = { ...user, ...data };
    this.users.set(id, updated);
    return updated;
  }

  async getWorkouts(userId: number): Promise<Workout[]> {
    return Array.from(this.workouts.values()).filter(
      (workout) => workout.userId === userId,
    );
  }

  async createWorkout(insertWorkout: InsertWorkout): Promise<Workout> {
    const id = this.currentId.workouts++;
    const workout = { ...insertWorkout, id };
    this.workouts.set(id, workout);
    return workout;
  }

  async updateWorkout(id: number, data: Partial<Workout>): Promise<Workout> {
    const workout = this.workouts.get(id);
    if (!workout) throw new Error("Workout not found");
    const updated = { ...workout, ...data };
    this.workouts.set(id, updated);
    return updated;
  }

  async getChatHistory(userId: number): Promise<AiChat[]> {
    return Array.from(this.chats.values()).filter(
      (chat) => chat.userId === userId,
    );
  }

  async saveChat(insertChat: InsertChat): Promise<AiChat> {
    const id = this.currentId.chats++;
    const chat = { ...insertChat, id };
    this.chats.set(id, chat);
    return chat;
  }
}

export const storage = new MemStorage();
