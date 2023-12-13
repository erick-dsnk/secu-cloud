import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __dirname + "/uploads");
  },
  filename: (req, file, cb) => {
    const date = Date.now();

    cb(null, date + "." + file.originalname.split(".")[1]);
  },
});

const upload = multer({ storage });

export default upload;
