/*
import { db } from "./client"; // seu arquivo de conexão drizzle
import { users } from "./schema";

export async function getAllUsers() {
  return db.select().from(users);
}
*/

import { users } from "@root/db/schema";

export default class {
  db: any;
 
  constructor(db: any) {
    this.db = db;
    console.log('db class', typeof db);
  }

  async getAll() {
    return this.db.select().from(users);
  }
}