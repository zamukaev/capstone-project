import dbConnect from "../../../db/connect";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
import User from "../../../db/models/user";

const generateAccessToken = (id, roles) => {
  const payload = {
    id,
    roles,
  };
  return Jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "24h" });
};

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === "POST") {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res.status(404).json({
          message: "password oder login ist falsch",
        });
      }
      const isValidPass = await bcrypt.compare(
        req.body.password,
        user._doc.password
      );
      if (!isValidPass) {
        return res.status(404).json({
          message: "password oder login ist falsch",
        });
      }

      const token = generateAccessToken(user._id, user.roles);
      const { password, ...userData } = user._doc;

      return res.status(200).json({
        ...userData,
        token,
      });
    } catch (error) {
      return res.status(500).json({
        message: "error",
      });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
