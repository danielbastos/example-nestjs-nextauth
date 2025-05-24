// lib/db.ts
//import { drizzle } from 'drizzle-orm/node-postgres';
//import { Client } from 'pg';
//import * as schema from '@root/db/schema';
import { db } from '@root/db';
import User from './user';

//const client = new Client({
//  connectionString: process.env.DATABASE_URL,
//});
//
//await client.connect();

//export const db = drizzle(client, { schema });
export const client = db;
export const user = new User (db);