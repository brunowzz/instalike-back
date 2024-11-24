import connectDb from "../config/dbConfig.js";

const connection = await connectDb(process.env.CONNECTION_DATABASE);

export const getAllPosts = () => {
  const database = connection.db("instabyte");
  const collection = database.collection("posts");

  return collection.find().toArray();
};

export const createPost = async (post) => {
  const database = connection.db("instabyte");
  const collection = database.collection("posts");
  return collection.insertOne(post);
};
