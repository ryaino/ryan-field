import { defineEventHandler } from 'h3';
import { useStorage } from 'nitropack/runtime';
import { scrapeCardImages } from '../../../../../features/optcg/functions/scrape-functions';
import axios from "axios";
import * as fs from "node:fs";

export default defineEventHandler(async (event) => {
  return await scrapeCardImages();
});

