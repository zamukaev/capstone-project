import dbConnect from "../../../db/connect";
import Post from "../../../db/models/posts";

export default async function handler(req, res) {
  await dbConnect();
  const { id } = req.query;
  if (req.method === "GET") {
    const post = await Post.findByIdAndUpdate(
      id,
      { $inc: { view: 1 } },
      { returnDocument: "after" }
    );
    if (!post) {
      return res.status(404).json({ message: "Not found" });
    }
    return res.status(200).json(post);
  }

  if (req.method === "DELETE") {
    const post = await Post.findByIdAndDelete(id);
    if (!post) {
      return res.status(404).json({ message: "Not found" });
    }
    return res.status(200).json({ message: "the post is deleted" });
  }

  if (req.method === "PUT") {
    const post = await Post.findByIdAndUpdate(id, { $set: req.body });
    if (!post) {
      return res.status(404).json({ message: "Not found" });
    }

    return res.status(200).json(post);
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
