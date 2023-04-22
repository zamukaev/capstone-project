import jwt from "jsonwebtoken";

export const checkAuth = (req, res, next) => {
  if (req.method === "OPTIONS") {
    next();
  }
  try {
    const token = (req.headers.authorization || "").replace(/Bearer\s?/, "");

    if (!token) {
      return res
        .status(403)
        .json({ message: "Benutzer ist nicht angemeldet!!!" });
    }
    const decodedDate = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decodedDate;
    next();
  } catch (error) {
    return res.status(500).json(error);
  }
};

export default checkAuth;
