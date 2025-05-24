import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

const dbName = process.env.DB_DBNAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbPort = process.env.DB_PORT;
const dbHost = process.env.DB_HOST;

const pool = new Pool({
  connectionString: `postgresql://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`,
});

export const db = drizzle(pool);