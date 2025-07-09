import { defineEventHandler,readBody } from 'h3';
import { scrapeCards } from '../../../../../features/optcg/functions/scrape-functions';
import { ScrapeCardsInput } from '../../../../../features/optcg/inputs/scrape-inputs.model';

export default defineEventHandler(async (event) => {
  const body = await readBody(event) as ScrapeCardsInput;
  return await scrapeCards(body);
});


