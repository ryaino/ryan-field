import { ScrapeCardsInput } from '../inputs/scrape-inputs.model';
import {
  InsertCard,
  upsertCards
} from '../../../../db/schema/tables/cards.table';
import { db } from '../../../../server/globals.model';
import { getCardInfo } from '../../../../../libs/optcg/scraper/scrape-cards';
import { getAllSeries } from '../../../../../libs/optcg/scraper/scrape-product-series';
import {
  InsertProduct,
  upsertProducts
} from '../../../../db/schema/tables/products.table';
import {
  InsertCardVariant,
  upsertCardVariants
} from '../../../../db/schema/tables/card-variants.table';


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
        cost: convertCostToNumber(card.cost),
        attribute: card.attribute,
        power: convertToNumber(card.power),
        counter: convertToNumber(card.counter),
        color: card.color,
        block: convertToNumber(card.block),
        factions: card.type,
        text: card.text,
        trigger: card.trigger
      });

      variantsToInsert.push({
        cardId: card.id,
        productSeries: rawCardInfo.seriesId,
        sets: card.sets,
        variantId: 'original'
      });
    } else {
      variantsToInsert.push({
        cardId: card.id,
        productSeries: rawCardInfo.seriesId,
        sets: card.sets,
        variantId: card.uniqueId.replace(card.id + '_', '')
      });
    }
  }

  const variants = await upsertCardVariants(variantsToInsert, db);
  const cards = await upsertCards(cardsToInsert, db);

  return {
    variants,
    cards
  };
}

function convertToNumber(input: string): number | null {
  if (input === undefined || input === null || input === '' || input === '-')
    return null;
  return +input;
}

function convertCostToNumber(input: string): number | null {
  if (input === undefined || input === null || input === '' || input === '-')
    return 0;
  return +input;
}

export async function scrapeProductSeries() {
  const rawSeriesInfo = await getAllSeries();

  try {
    return await insertSeriesIntoDb(rawSeriesInfo);
  } catch (e) {
    console.error('Error inserting cards');
  }
}

async function insertSeriesIntoDb(
  rawSeriesInfo: {
    seriesId: string;
    name: string;
  }[]
) {
  const productsToInput: InsertProduct[] = [];

  for (const option of rawSeriesInfo) {
    if (option.name === 'Promotion card') {
      productsToInput.push({
        id: 'P',
        name: option.name,
        series: option.seriesId
      });
    } else if (option.name === 'Other Product Card') {
      productsToInput.push({
        id: 'Other',
        name: option.name,
        series: option.seriesId
      });
    } else if (option.seriesId.length === 0) {
    } else {
      const productId = option.name.substring(
        option.name.indexOf('[') + 1,
        option.name.lastIndexOf(']')
      );

      const productName = option.name.substring(
        option.name.indexOf('-') + 1,
        option.name.lastIndexOf('[') - 2
      );

      productsToInput.push({
        id: productId,
        name: productName,
        series: option.seriesId
      });
    }
  }

  return await upsertProducts(productsToInput, db);
}

