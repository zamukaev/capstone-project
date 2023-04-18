import dbConnect from "../../../db/connect";
import Post from "../../../db/models/posts";

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === "GET") {
    const posts = await Post.find();
    if (!posts) {
      return res.status(404).json({ message: "Not found" });
    }
    return res.status(200).json(posts);
  }

  if (req.method === "POST") {
    try {
      const doc = new Post({
        title: req.body.title,
        description: req.body.description,
        full_description: req.body.full_description,
        alt: req.body.alt,
        image: req.body.image,
        date: new Date(),
      });
      const post = await doc.save();
      return res.status(201).json(post);
    } catch (error) {
      return res.status(500).json(error);

    }
    return res.status(201).json(post);
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
