import { createClient } from '@vercel/edge-config';
import { Cache } from './cache';

export class PlanetyAPI {
  private static instance: PlanetyAPI;
  private cache: Cache;
  private baseUrl: string;

  private constructor() {
    this.cache = new Cache();
    this.baseUrl = process.env.EXPO_PUBLIC_API_URL!;
  }

  static getInstance() {
    if (!PlanetyAPI.instance) {
      PlanetyAPI.instance = new PlanetyAPI();
    }
    return PlanetyAPI.instance;
  }

  async categorizeFriend(data: InteractionData): Promise<PlanetCategory> {
    const cacheKey = `category:${JSON.stringify(data)}`;
    const cached = await this.cache.get(cacheKey);
    if (cached) return cached as PlanetCategory;

    const response = await fetch(`${this.baseUrl}/friends/categorize`, {
      method: 'POST',
      body: JSON.stringify(data),
    });

    const { category } = await response.json();
    await this.cache.set(cacheKey, category, 60 * 5); // Cache for 5 minutes
    return category;
  }
} 