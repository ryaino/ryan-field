import { PageServerLoad } from '@analogjs/router';

export const load = async ({
  params,
  req,
  res,
  fetch,
  event,
}: PageServerLoad) => {

  const api: any = await fetch('/api/v1/optcg/products/scrape-series');
  return {
    products: api,
    loaded: true,
  };
};
