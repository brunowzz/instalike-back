import getAllPosts from "../models/postsModels.js";

const listPosts = async (req, res) => {
  const posts = await getAllPosts();
  res.status(200).json(posts);
};

export default listPosts;
