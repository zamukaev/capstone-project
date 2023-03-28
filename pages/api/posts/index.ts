import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../db/connect";
import Posts from "../../../db/models/posts";

interface IPost {
  title: string;
  content: string;
  image: string;
}
interface Imessage {
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IPost[] | Imessage>
) {
  await dbConnect();
  if (req.method === "GET") {
    const posts: IPost[] = await Posts.find();
    if (!posts) {
      return res.status(404).json({ message: "Not found" });
    }
    res.status(200).json(posts);
  }
}
