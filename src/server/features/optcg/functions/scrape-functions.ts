import { ScrapeCardsInput } from '../inputs/scrape-inputs.model';
import {
  InsertCard,
  upsertCards,
} from '../../../../db/schema/tables/cards.table';
import { db } from '../../../../server/globals.model';
import { getCardInfo } from '../../../../../libs/optcg/scraper/scrape-cards';
import { getAllSeries } from '../../../../../libs/optcg/scraper/scrape-product-series';
import {
  InsertProduct,
  upsertProducts,
} from '../../../../db/schema/tables/products.table';
import {
  CardVariantsTable,
  InsertCardVariant,
  SelectCardVariant,
  upsertCardVariants,
} from '../../../../db/schema/tables/card-variants.table';
import { and, eq, isNull } from 'drizzle-orm';
import * as fs from 'node:fs';
import axios from 'axios';
import { useStorage } from 'nitropack/runtime';

export async function scrapeCards(input: ScrapeCardsInput) {
  const rawCardInfo = await getCardInfo(input.seriesId);

  return await insertCardsIntoDb(rawCardInfo);
}

async function insertCardsIntoDb(rawCardInfo: {
  seriesId: string;
  productId: string;
  productName: string;
  productType: string;
  cards: any[];
}) {
  const variantsToInsert: InsertCardVariant[] = [];
  const cardsToInsert: InsertCard[] = [];

  for (const card of rawCardInfo.cards) {
    if (card.uniqueId === card.id) {
      cardsToInsert.push({
        id: card.id,
        rarity: card.rarity,
        category: card.category,
        name: card.name,
        cost: convertToNumber(card.cost),
        attribute: card.attribute,
        power: convertToNumber(card.power),
        counter: convertToNumber(card.counter),
        color: card.color,
        block: convertToNumber(card.block),
        factions: card.type,
        text: card.text,
        trigger: card.trigger,
      });

      variantsToInsert.push({
        cardId: card.id,
        productSeries: rawCardInfo.seriesId,
        sets: card.sets,
        variantId: 'original',
      });
    } else {
      variantsToInsert.push({
        cardId: card.id,
        productSeries: rawCardInfo.seriesId,
        sets: card.sets,
        variantId: card.uniqueId.replace(card.id + '_', ''),
      });
    }
  }

  const variants = await upsertCardVariants(variantsToInsert, db);
  const cards = await upsertCards(cardsToInsert, db);

  return {
    variants,
    cards,
  };
}

function convertToNumber(input: string): number | null {
  if (input === undefined || input === null || input === '' || input === '-')
    return null;
  return +input;
}

export async function scrapeProductSeries() {
  const rawSeriesInfo = await getAllSeries();

  return await insertSeriesIntoDb(rawSeriesInfo);
}

async function insertSeriesIntoDb(
  rawSeriesInfo: {
    seriesId: string;
    name: string;
  }[],
) {
  const productsToInput: InsertProduct[] = [];

  for (const option of rawSeriesInfo) {
    if (option.name === 'Promotion card') {
      productsToInput.push({
        id: 'P',
        name: option.name,
        series: option.seriesId,
      });
    } else if (option.name === 'Other Product Card') {
      productsToInput.push({
        id: 'Other',
        name: option.name,
        series: option.seriesId,
      });
    } else if (option.seriesId.length === 0) {
    } else {
      const productId = option.name.substring(
        option.name.indexOf('[') + 1,
        option.name.lastIndexOf(']'),
      );

      const productName = option.name.substring(
        option.name.indexOf('-') + 1,
        option.name.lastIndexOf('[') - 2,
      );

      productsToInput.push({
        id: productId,
        name: productName,
        series: option.seriesId,
      });
    }
  }

  return await upsertProducts(productsToInput, db);
}

export async function scrapeCardImages() {
  const variantsToUpdate = await db
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

  const storage = useStorage('db');

  for (const variant of variantsToUpdate) {
    console.log('----------start of loop------------');
    let imageName;
    if (variant.variantId.toLowerCase() === 'original') {
      imageName = `${variant.cardId}.png`;
    } else {
      imageName = `${variant.cardId}_${variant.variantId}.png`;
    }

    const response = await $fetch<Blob>(
      `https://en.onepiece-cardgame.com/images/cardlist/card/${imageName}`,
      { responseType: 'blob' },
    );
    console.log('request sent');
    await storage.setItemRaw(imageName, Buffer.from(await response.arrayBuffer()));
    console.error('----------end of loop------------');
  }

  return successImages;
}

async function getImage(imageName: string, variant: SelectCardVariant) {
  try {
    // let image = await $fetch(
    //   `https://en.onepiece-cardgame.com/images/cardlist/card/${imageName}`,
    //   { responseType: "arrayBuffer" },
    // );
    // console.log(image);
    //
    // fs.writeFileSync(
    //   `${filePath}/${imageName}`,
    //   // @ts-ignore
    //   image
    // );
    const filePath = 'src/server/assets/cards';
    const writer = fs.createWriteStream(`${filePath}/${imageName}`);
    console.log('stream created');

    const progress = new Promise((resolve, reject) => {
      writer.on('finish', () => {
        console.log('writing complete');
        writer.close();
        resolve(true);
      });
      writer.on('error', reject);
    });
    const { data } = await axios.get(
      `https://en.onepiece-cardgame.com/images/cardlist/card/${imageName}`,
      {
        responseType: 'stream',
      },
    );
    console.log('request sent');

    // fs.writeFileSync(`${filePath}/${imageName}`, data);

    data.pipe(writer);

    await progress;

    console.log('file written');
    // await db.update(CardVariantsTable).set( {
    //   imageLocation: 'local'
    // }).where(
    //   and(
    //     eq(CardVariantsTable.cardId, variant.cardId),
    //     eq(CardVariantsTable.variantId, variant.variantId))
    // )
  } catch (err) {}
}
