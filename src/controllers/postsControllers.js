import fs from "fs";
import { createPost, getAllPosts, updatePost } from "../models/postsModels.js";

export const listPosts = async (req, res) => {
  const posts = await getAllPosts();
  res.status(200).json(posts);
};

export const newPost = async (req, res) => {
  const newClient = req.body;

  try {
    const newPost = await createPost(newClient);
    return res.status(200).json(newPost);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ Error: "request failed" });
  }
};

export const uploadImage = async (req, res) => {
  const image = req.file.originalname;
  const post = {
    title: "Foto do site",
    description: "Foto do site do justino",
    image: image,
  };

  try {
    const newPost = await createPost(post);
    const updateImage = `uploads/${newPost.insertedId}.png`;
    fs.renameSync(req.file.path, updateImage);
    return res.status(200).json(newPost);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ Error: "request failed" });
  }
};

export const updateNewPost = async (req, res) => {
  const id = req.params.id;
  const urlImage = `http://localhost:8080/${id}.png`;

  const post = {
    description: req.body.description,
    imgUrl: urlImage,
    alt: req.body.alt,
  };

  try {
    const newPost = await updatePost(id, post);
    return res.status(200).json(newPost);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ Error: "request failed" });
  }
};
