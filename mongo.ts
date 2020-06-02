import {
  MongoClient,
  Database,
  Collection,
} from "https://deno.land/x/mongo@v0.7.0/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

const client: MongoClient = new MongoClient();
client.connectWithUri(config().MONGO_URL);

console.log("Available databases:");
await client.listDatabases()
  .then((e) => console.log(e))
  .catch((err) => console.log(err));

const db: Database = client.database("test");
const people: Collection = db.collection("people");

const user1 = await people.find({ name: { $ne: null } });
console.log(user1);
