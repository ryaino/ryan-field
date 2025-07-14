import { sqliteTable } from 'drizzle-orm/sqlite-core';
import * as t from 'drizzle-orm/sqlite-core';
import { Db } from '../../create-database';
import { conflictUpdateAllExcept } from "../../utils";

export const ProductsTable = sqliteTable('products', {
  id: t.text().primaryKey(),
  name: t.text().notNull(),
  series: t.text().unique()
})

export type InsertProduct = typeof ProductsTable.$inferInsert;


export async function upsertProducts(data: InsertProduct[], db: Db) {
  return db.insert(ProductsTable)
    .values(data)
    .onConflictDoUpdate({
      target: ProductsTable.id,
      set: conflictUpdateAllExcept(ProductsTable, ["id"])
    })
    .returning()
}
