import { ScrapeCardsInput } from '../inputs/scrape-inputs.model';
import { getCardInfo } from '../../../../../libs/optcg/scraper';
import { InsertCard, upsertCards } from '../../../../db/schema/tables/cards.table';
import { db } from '../../../../server/globals.model';

export async function scrapeCards(input: ScrapeCardsInput) {
  const rawCardInfo = await getCardInfo(input.seriesId);

  return await insertCardsIntoDb(rawCardInfo);
}

async function insertCardsIntoDb(rawCardInfo: {
  productCode: string;
  productId: string;
  productName: string;
  productType: string;
  cards: any[]
}) {
  const variants = [];
  const cardsToInsert: InsertCard[] = [];

  for(const card of rawCardInfo.cards) {
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
      })
    }
  }

  return await upsertCards(cardsToInsert, db);
}

function convertToNumber(input: string): number | null{
  if (input === undefined || input === null || input === '' || input === '-') return null;
  return +input;

}
