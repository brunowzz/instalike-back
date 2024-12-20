import express from "express";
import multer from "multer";
import {
  listPosts,
  newPost,
  updateNewPost,
  uploadImage,
} from "../controllers/postsControllers.js";
import cors from "cors";

const corsOpt = {
  origin: "http://localhost:3000",
  optionsSucessStatus: 200,
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ dest: "./uploads", storage });

const routes = (app) => {
  app.use(express.json());
  app.use(cors(corsOpt));

  app.get("/posts", listPosts);
  app.post("/posts", newPost);

  app.post("/upload", upload.single("image"), uploadImage);
  app.put("/upload/:id", updateNewPost);
};

export default routes;
