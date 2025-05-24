import { users } from "@root/db/schema";
import { NodePgDatabase } from 'drizzle-orm/node-postgres';

export class UserRepository {
  db: NodePgDatabase;
 
  constructor(db: NodePgDatabase) {
    this.db = db;
  }

  async getAll() {
    return this.db.select().from(users);
  }
}