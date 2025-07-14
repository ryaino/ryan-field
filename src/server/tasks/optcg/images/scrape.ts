import { defineTask } from 'nitropack/runtime';
import { scrapeCardImages } from '../../../features/optcg/functions/scrape-functions';

export default defineTask({
  meta: {
    name: "optcg:image-download",
    description: "Download missing images",
  },
  run({ payload, context }) {
    return {
      result: scrapeCardImages()
    }
  },
});

