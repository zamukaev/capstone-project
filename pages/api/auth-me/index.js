//! Erstellun der Role für Benutzer

import dbConnect from "../../../db/connect";
import User from "../../../db/models/user";
import checkAuth from "../../../middleware/checkAuth";
export default async function handler(req, res) {
  await dbConnect();
  if (req.method === "GET") {
    checkAuth(req, res, async () => {
      try {
        const user = await User.findById(req.user.id);
        if (!user) {
          return res.status(404).json({
            message: "Sie sind nicht angelogt!",
          });
        }
        const { password, ...userdata } = user._doc;
        return res.json(userdata);
      } catch (error) {
        return res.status(500).json(error);
      }
    });
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
