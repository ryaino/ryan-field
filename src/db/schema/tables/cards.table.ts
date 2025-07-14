import { sqliteTable } from 'drizzle-orm/sqlite-core';
import * as t from 'drizzle-orm/sqlite-core';
import { Db } from '../../create-database';
import { conflictUpdateAllExcept } from "../../utils";

export const CardsTable = sqliteTable('cards', {
  id: t.text().primaryKey(),
  rarity: t.text().notNull(),
  category: t.text().notNull(),
  name: t.text().notNull(),
  cost: t.int().notNull(),
  attribute: t.text(),
  power: t.int(),
  counter: t.int(),
  color: t.text().notNull(),
  block: t.int().notNull(),
  factions: t.text().notNull(),
  text: t.text(),
  trigger: t.text(),
});

export type InsertCard = typeof CardsTable.$inferInsert;
export type SelectCard = typeof CardsTable.$inferSelect;

export async function upsertCards(data: InsertCard[], db: Db) {
  return db.insert(CardsTable)
    .values(data)
    .onConflictDoUpdate({
      target: CardsTable.id,
      set: conflictUpdateAllExcept(CardsTable, ["id"])
    })
    .returning()
}
