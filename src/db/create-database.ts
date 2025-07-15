import { drizzle } from 'drizzle-orm/better-sqlite3';

export function createDbInstance() {
  return drizzle({
    connection: process.env.DATABASE_URL,
    casing: 'snake_case'
  });
}

export type Db = ReturnType<typeof createDbInstance>;
