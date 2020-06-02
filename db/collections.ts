import {
  MongoClient,
  Database,
  Collection,
  config,
} from "../deps.ts";

console.log(config().MONGO_URL);

const client: MongoClient = new MongoClient();
// client.connectWithUri(config().MONGO_URL);
// MONGO_URL="mongodb://mongo:27017"
client.connectWithUri(`mongodb://${config().DATABASE}:${config().DB_PORT}`);
console.log(await client.listDatabases());

const database: Database = client.database("deno-db");
export const users: Collection = database.collection("users");
