import { CardVariantsTable } from './db/schema/tables/card-variants.table';
import { and, eq, isNull } from 'drizzle-orm';
import fs from 'node:fs';
import fsp from 'node:fs/promises';
import { ofetch } from 'ofetch';
import { drizzle } from 'drizzle-orm/better-sqlite3';


const db = drizzle({
  connection: './local.db',
  casing: 'snake_case',
});

const variantsToUpdate = await db.select()
  .from(CardVariantsTable)
  .where(isNull(CardVariantsTable.imageLocation));
// .limit(10);


const assetsPath = 'src/server/assets';
const cardsPath = `${assetsPath}/cards`;

ensureDirectoryExists(assetsPath);
ensureDirectoryExists(cardsPath);

const failedImages = [];
const successImages = [];

const promises: {
  name: string;
  promise: Promise<Blob>;
}[] = [];

for (const variant of variantsToUpdate) {
  console.log('----------start of loop------------');
  let imageName;
  if (variant.variantId.toLowerCase() === 'original') {
    imageName = `${variant.cardId}.png`;
  } else {
    imageName = `${variant.cardId}_${variant.variantId}.png`;
  }

  promises.push({
    name: imageName,
    promise: ofetch(
      `https://en.onepiece-cardgame.com/images/cardlist/card/${imageName}`,
      {
        responseType: 'blob',
      },
    ),
  });
}
const images = await Promise.all(promises.map((promise) => promise.promise));
const saveImages = [];

for (let i = 0; i < images.length; i++) {
  let imageName;
  const variant = variantsToUpdate[i];
  if (variant.variantId.toLowerCase() === 'original') {
    imageName = `${variant.cardId}.png`;
  } else {
    imageName = `${variant.cardId}_${variant.variantId}.png`;
  }
  const cardPath = `${cardsPath}/${variant.cardId.split('-')[0]}`;

  ensureDirectoryExists(cardPath);
  saveImages.push(
    new Promise(async (resolve, reject) => {
      resolve(fsp.writeFile(
        `${cardPath}/${imageName}`,
        Buffer.from(await images[i].arrayBuffer())
      ).then(async () => {
        await db.update(CardVariantsTable).set( {
          imageLocation: 'local'
        }).where(
          and(
            eq(CardVariantsTable.cardId, variant.cardId),
            eq(CardVariantsTable.variantId, variant.variantId))
        )
      }))
    })

  );
}



// await Promise.all(saveImages);
console.log('request sent');
console.error('----------end of loop------------');

function ensureDirectoryExists(path: string) {
  try {
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path);
    }
  } catch (err) {
    console.error(err);
  }
}
