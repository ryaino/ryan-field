import { defineEventHandler } from 'h3';
import { scrapeProductSeries } from '../../../../../features/optcg/functions/scrape-functions';

export default defineEventHandler(async (event) => {
  return await scrapeProductSeries();
});
