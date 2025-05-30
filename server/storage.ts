import { users, purchases, type User, type InsertUser, type Purchase, type InsertPurchase } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createPurchase(purchase: InsertPurchase): Promise<Purchase>;
  getPurchases(): Promise<Purchase[]>;
  getPurchasesByEmail(email: string): Promise<Purchase[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private purchases: Map<number, Purchase>;
  private currentUserId: number;
  private currentPurchaseId: number;

  constructor() {
    this.users = new Map();
    this.purchases = new Map();
    this.currentUserId = 1;
    this.currentPurchaseId = 1;
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
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createPurchase(insertPurchase: InsertPurchase): Promise<Purchase> {
    const id = this.currentPurchaseId++;
    const purchase: Purchase = {
      ...insertPurchase,
      id,
      status: "pending",
      createdAt: new Date(),
    };
    this.purchases.set(id, purchase);
    return purchase;
  }

  async getPurchases(): Promise<Purchase[]> {
    return Array.from(this.purchases.values());
  }

  async getPurchasesByEmail(email: string): Promise<Purchase[]> {
    return Array.from(this.purchases.values()).filter(
      (purchase) => purchase.email === email,
    );
  }
}

export const storage = new MemStorage();
