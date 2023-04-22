import dbConnect from "../../../db/connect";
import bcrypt from "bcrypt";

import User from "../../../db/models/user";

import Role from "../../../db/models/role";

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === "POST") {
    try {
      const { firstname, lastname, email, password, avatarUrl } = req.body;
      const candidate = await User.findOne({ email });
      if (candidate) {
        //wenn ja dann Fehler melden
        return res
          .status(400)
          .json("Der Benutzer mit der Name schon existiert");
      }
      const passwordHash = password;
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(passwordHash, salt);
      const userRole = await Role.findOne({ value: "USER" });

      const doc = new User({
        email,
        firstname,
        lastname,
        avatarUrl,
        password: hash,
        roles: userRole.value,
      });
      await doc.save();
      return res.json({
        message: "Das Account wurde erfolgreich erstellt!",
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
