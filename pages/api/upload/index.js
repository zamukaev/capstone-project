import multer from "multer";

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = async (req, res) => {
  //const multerStorage = multer.memoryStorage();
  const storage = multer.diskStorage({
    destination: (_, __, cb) => {
      cb(null, "public/images");
    },
    filename: (_, file, cb) => {
      cb(null, file.originalname);
    },
  });
  const multerUpload = multer({ storage });

  await runMiddleware(req, res, multerUpload.single("file"));
  const file = req.file;

  const imageUrl = file.filename;
  return res.status(200).json({ url: "/images/" + imageUrl });
};

export default handler;
