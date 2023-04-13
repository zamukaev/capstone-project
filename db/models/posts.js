import mongoose, { Model } from "mongoose";

const PostSchema = new mongoose.Schema({
  title: { type: String, require: true },
  description: { type: String },
  full_description: String,
  alt: String,
  image: String,
  date: Date,
  view: { type: Number, default: 0 },
});

const Post = mongoose.models.Posts || mongoose.model("Posts", PostSchema);
export default Post;
