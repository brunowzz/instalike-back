import express from "express";
import { listPosts, newPost } from "../controllers/postsControllers.js";

const routes = (app) => {
  app.use(express.json());

  app.get("/posts", listPosts);
  app.post("/posts", newPost);
};

export default routes;
