import { defineNitroPlugin } from 'nitropack/runtime';
import { setDbInstance } from '../../server/globals.model';
import { createDbInstance } from '../../db/create-database';


export default defineNitroPlugin(() => {
  setDbInstance(createDbInstance());
});
