import mongoose, { Model } from "mongoose";

const PostSchema = new mongoose.Schema({
  title: { type: String, require: true },
  desc: { type: String, required: true },
  full_desc: String,
  alt: String,
  image: { type: String },
});

const Post = mongoose.models.Posts || mongoose.model("Posts", PostSchema);
export default Post;
