import cloudinary from "cloudinary";

import multer from "multer";

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
