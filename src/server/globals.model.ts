import { Db } from '../db/create-database';

export let db: Db;

export function setDbInstance(instance: Db) {
  db = instance;
}
