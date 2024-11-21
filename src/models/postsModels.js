import connectDb from "../config/dbConfig.js";

const connection = await connectDb(process.env.CONNECTION_DATABASE);

const getAllPosts = () => {
  const database = connection.db("instabyte");
  const collection = database.collection("posts");

  return collection.find().toArray();
};

export default getAllPosts;
