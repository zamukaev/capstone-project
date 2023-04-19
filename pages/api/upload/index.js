import cloudinary from "cloudinary";
import { v2 as cloudinaryV2 } from "cloudinary";
import multer from "multer";

//function runMiddleware(req, res, fn) {
////return new Promise((resolve, reject) => {
//  fn(req, res, (result) => {
//   if (result instanceof Error) {
//    return reject(result);
//  }

//  return resolve(result);
//  });
//// });
//}

//export const config = {
// api: {
//  bodyParser: false,
// },
//};

//const handler = async (req, res) => {
//if (req.method === "POST") {
//const multerStorage = multer.memoryStorage();
// const storage = multer.diskStorage({
// destination: (_, __, cb) => {
//   cb(null, "public/images");
// },
//  filename: (_, file, cb) => {
//    cb(null, file.originalname);
//  },
// });
// const multerUpload = multer({ storage });

// await runMiddleware(req, res, multerUpload.single("file"));

// const file = req.file;
//if (!file) {
//  return res.status(406).json({ message: "Not Acceptable" });
// }
// const imageUrl = file.filename;
//// return res.status(200).json({ url: "/images/" + imageUrl });
//} else {
//return res.status(405).json({ message: "Method not allowed" });
//}
//};

const storage = multer.memoryStorage();

const upload = multer({ storage });

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }

  upload.single("file")(req, res, (err) => {
    if (err) {
      console.error(err);
      res.status(400).json({ message: "Error uploading image" });
      return;
    }

    cloudinary.v2.uploader
      .upload_stream({ resource_type: "auto" }, (error, result) => {
        if (error) {
          console.error(error);
          res
            .status(400)
            .json({ message: "Error uploading image to Cloudinary" });
          return;
        }
        return res.status(200).json({ url: result.secure_url });
      })
      .end(req.file.buffer);
  });
}
