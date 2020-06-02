import {
  MongoClient,
  Database,
  Collection,
  config,
} from "../deps.ts";

const client: MongoClient = new MongoClient();
client.connectWithUri(config().MONGO_URL);
const database: Database = client.database("deno-db");

export const users: Collection = database.collection("users");
