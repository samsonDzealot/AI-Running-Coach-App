import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { getCoachingAdvice } from "./openai";
import { insertUserSchema, insertWorkoutSchema, insertChatSchema } from "@shared/schema";

export function registerRoutes(app: Express): Server {
  const httpServer = createServer(app);

  // User routes
  app.get("/api/users/:id", async (req, res) => {
    const user = await storage.getUser(parseInt(req.params.id));
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  });

  app.post("/api/users", async (req, res) => {
    const result = insertUserSchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({ message: "Invalid user data" });
    }
    const user = await storage.createUser(result.data);
    res.status(201).json(user);
  });

  // Workout routes
  app.get("/api/users/:userId/workouts", async (req, res) => {
    const workouts = await storage.getWorkouts(parseInt(req.params.userId));
    res.json(workouts);
  });

  app.post("/api/workouts", async (req, res) => {
    const result = insertWorkoutSchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({ message: "Invalid workout data" });
    }
    const workout = await storage.createWorkout(result.data);
    res.status(201).json(workout);
  });

  // AI Chat routes
  app.get("/api/users/:userId/chats", async (req, res) => {
    const chats = await storage.getChatHistory(parseInt(req.params.userId));
    res.json(chats);
  });

  app.post("/api/chat", async (req, res) => {
    const result = insertChatSchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({ message: "Invalid chat data" });
    }

    try {
      const user = await storage.getUser(result.data.userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const response = await getCoachingAdvice(result.data.message, {
        level: user.level,
        weeklyGoal: user.weeklyGoal,
      });

      const chat = await storage.saveChat({
        ...result.data,
        response,
        timestamp: new Date(),
      });

      res.status(201).json(chat);
    } catch (error) {
      res.status(500).json({ message: "Failed to process chat message" });
    }
  });

  return httpServer;
}
