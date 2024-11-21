import { MongoClient } from "mongodb";

export default async function connectDb(client) {
  try {
    const mongoClient = new MongoClient(client);
    await mongoClient.connect();

    return mongoClient;
  } catch (error) {
    console.error(error);
    process.exit();
  }
}
