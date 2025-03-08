import { drizzle } from 'drizzle-orm/sqlite';
import { openDatabase } from 'expo-sqlite';
import { supabase } from '../supabase';

export class Database {
  private static instance: Database;
  private db: SQLiteDatabase;
  private syncQueue: Set<string>;

  private constructor() {
    this.db = openDatabase('planety.db');
    this.syncQueue = new Set();
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  // Local operations with sync
  async saveFriend(friend: Friend) {
    // Save locally
    await this.db.transaction(tx => {
      tx.executeSql(
        'INSERT OR REPLACE INTO friends (id, name, category) VALUES (?, ?, ?)',
        [friend.id, friend.name, friend.category]
      );
    });

    // Queue for sync
    this.syncQueue.add(friend.id);
    this.triggerSync();
  }

  // Sync with Supabase
  private async triggerSync() {
    if (!navigator.onLine) return;

    const ids = Array.from(this.syncQueue);
    if (ids.length === 0) return;

    try {
      const { data, error } = await supabase
        .from('friends')
        .upsert(await this.getFriendsByIds(ids));

      if (!error) {
        ids.forEach(id => this.syncQueue.delete(id));
      }
    } catch (error) {
      console.error('Sync failed:', error);
    }
  }
} 