import { defineConfig } from 'drizzle-kit'

const dbName = process.env.DB_DBNAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbPort = process.env.DB_PORT;
const dbHost = process.env.DB_HOST;

export default defineConfig({
  dialect: "postgresql",
  schema: './db/schema.ts',
  dbCredentials: {
    url: `postgresql://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`,
  }
})
