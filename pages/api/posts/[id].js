import dbConnect from "../../../db/connect";
import Post from "../../../db/models/posts";

export default async function handler(req, res) {
  await dbConnect();
  const { id } = req.query;
  if (req.method === "GET") {
    const post = await Post.findById(id);
    if (!post) {
      return res.status(404).json({ message: "Not found" });
    }
    res.status(200).json(post);
  }
}
