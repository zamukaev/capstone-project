import dbConnect from "../../../db/connect";
import Post from "../../../db/models/posts";
import checkAuth from "../../../middleware/checkAuth";

export default async function handler(req, res) {
  await dbConnect();
  const { id } = req.query;
  if (req.method === "GET") {
    try {
      const post = await Post.findByIdAndUpdate(
        id,
        { $inc: { view: 1 } },
        { returnDocument: "after" }
      );
      if (!post) {
        return res.status(404).json({ message: "Not found" });
      }
      return res.status(200).json(post);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  checkAuth(req, res, async () => {
    if (req.method === "DELETE") {
      try {
        const post = await Post.findByIdAndDelete(id);
        if (!post) {
          return res.status(404).json({ message: "Not found" });
        }
        return res.status(200).json({ message: "the post is deleted" });
      } catch (error) {
        return res.status(500).json(error);
      }
    }

    if (req.method === "PUT") {
      try {
        const post = await Post.findByIdAndUpdate(id, { $set: req.body });
        if (!post) {
          return res.status(404).json({ message: "Not found" });
        }

        return res.status(200).json(post);
      } catch (error) {
        return res.status(500).json(error);
      }
    } else {
      return res.status(405).json({ message: "Method not allowed" });
    }
  });
}
