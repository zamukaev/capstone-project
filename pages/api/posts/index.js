import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../db/connect";
import Posts from "../../../db/models/posts";

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === "GET") {
    const posts = await Posts.find();
    if (!posts) {
      return res.status(404).json({ message: "Not found" });
    }
    res.status(200).json(posts);
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
