import mongoose, { Model } from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    title: { type: String, require: true },
    description: { type: String },
    full_description: String,
    alt: String,
    image: String,
    view: { type: Number, default: 0 },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    likes: [{ author: { type: mongoose.Schema.Types.ObjectId, ref: "User" } }],
    comments: [
      {
        author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        text: { type: String, required: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.models.Posts || mongoose.model("Posts", PostSchema);
export default Post;
