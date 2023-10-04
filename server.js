import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import showBlogs from "./routers/showBlog.js"
import insertBlogRouter from "./routers/AddBlog.js";
import connectDb from "./db.js";
 connectDb();
const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.post("/api/addBlog", insertBlogRouter);

app.get("/api/showBlogs", showBlogs);

app.listen(port, () => {
  console.log(`listening to ${port}....`);
});
