import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { storage } from "./storage";
import { insertPurchaseSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Create purchase endpoint
  app.post("/api/purchases", async (req, res) => {
    try {
      const purchaseData = insertPurchaseSchema.parse(req.body);
      const purchase = await storage.createPurchase(purchaseData);
      res.json(purchase);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid purchase data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  // Get purchases by email
  app.get("/api/purchases", async (req, res) => {
    try {
      const { email } = req.query;
      
      if (typeof email === "string") {
        const purchases = await storage.getPurchasesByEmail(email);
        res.json(purchases);
      } else {
        const purchases = await storage.getPurchases();
        res.json(purchases);
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  const httpServer = createServer(app);
  return httpServer;
}
