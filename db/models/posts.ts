import mongoose, { Model } from "mongoose";

interface IPost {
  title: string;
  content: string;
  image?: string;
}
const PostSchema = new mongoose.Schema<IPost, Model<IPost>>({
  title: { type: String, require: true },
  content: { type: String, required: true },
  image: { type: String },
});

const Post: Model<IPost> =
  mongoose.models.Posts || mongoose.model("Posts", PostSchema);
export default Post;
