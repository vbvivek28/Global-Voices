import mongoose from "mongoose";
const { Schema, model } = mongoose;

const BlogSchema = new Schema({
    blogtitle: String,
    blogcontent: String,
  
  });
  
  
export default model("Blog", BlogSchema);