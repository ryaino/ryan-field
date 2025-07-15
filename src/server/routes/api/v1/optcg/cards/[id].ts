import { defineEventHandler, getRouterParam } from 'h3';
import { useStorage } from 'nitropack/runtime';

export default defineEventHandler(async (event) => {
  const name = getRouterParam(event, 'id');
  const subdir = name.split('-')[0];
  const data = await useStorage(`assets:server/cards/${subdir}`).getItemRaw(
    `${name}.png`,
  );
  return data;
});
