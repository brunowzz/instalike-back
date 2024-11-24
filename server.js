import express from "express";
import routes from "./src/routes/postsRoutes.js";

const app = express();
app.use(express.static("uploads"));

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});

routes(app);
