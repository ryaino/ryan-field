import { CardVariantsTable } from './db/schema/tables/card-variants.table';
import { isNull } from 'drizzle-orm';
import fs from 'node:fs';
import fsp from 'node:fs/promises';
import { ofetch } from 'ofetch';
import { drizzle } from 'drizzle-orm/better-sqlite3';

const variantsToUpdate = await drizzle({
  connection: './local.db',
  casing: 'snake_case',
})
  .select()
  .from(CardVariantsTable)
  .where(isNull(CardVariantsTable.imageLocation));
// .limit(10);

const filePath = 'src/server/assets/cards';

try {
  if (!fs.existsSync('src/server/assets')) {
    fs.mkdirSync('src/server/assets');

    if (!fs.existsSync(filePath)) {
      fs.mkdirSync(filePath);
    }
  }
} catch (err) {
  console.error(err);
}

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

  saveImages.push(
    fsp.writeFile(
      `${filePath}/${imageName}`,
      Buffer.from(await images[i].arrayBuffer()),
    ),
  );
}

// await Promise.all(saveImages);
console.log('request sent');
console.error('----------end of loop------------');
