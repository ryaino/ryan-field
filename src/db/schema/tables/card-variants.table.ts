import { sqliteTable } from 'drizzle-orm/sqlite-core';
import * as t from 'drizzle-orm/sqlite-core';
import { primaryKey } from 'drizzle-orm/sqlite-core/primary-keys';
import { Db } from '../../../db/create-database';
import { conflictUpdateAllExcept } from '../../../db/utils';

export const CardVariantsTable = sqliteTable(
  'card_variants',
  {
    cardId: t
      .text('card_id')
      .notNull(),
    variantId: t.text('variant_id').notNull(),
    productSeries: t.text('product_series'),
    sets: t.text(),
    imageLocation: t.text('image_location').default(null),
  },
  (table) => [primaryKey({ columns: [table.cardId, table.variantId] })],
);

export type InsertCardVariant = typeof CardVariantsTable.$inferInsert;
export type SelectCardVariant = typeof CardVariantsTable.$inferSelect;

export async function upsertCardVariants(data: InsertCardVariant[], db: Db) {
  return db.insert(CardVariantsTable)
    .values(data)
    .onConflictDoUpdate({
      target: [CardVariantsTable.cardId, CardVariantsTable.variantId],
      set: conflictUpdateAllExcept(CardVariantsTable, ["cardId", "variantId"]),
    })
    .returning()
}
