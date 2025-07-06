import { defineEventHandler } from 'h3';
import { getCardInfo } from '../../../../../libs/optcg/scraper/index';

export default defineEventHandler(async () => {
 return await getCardInfo();
});

