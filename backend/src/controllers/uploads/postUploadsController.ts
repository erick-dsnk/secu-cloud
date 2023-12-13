import { Request, Response } from "express";

const postUploadsController = (req: Request, res: Response) => {
  let files = [];

  for (let file in req.files) {
    console.log(file);
  }

  res.status(200).send({ message: "ok" });
};

export default postUploadsController;
