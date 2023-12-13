import { NextFunction, Request, Response } from "express";
import { MulterError } from "multer";
import upload from "../storage";

const uploadWithErrors = (req: Request, res: Response, next: NextFunction) => {
  const uploadCb = upload.any();

  uploadCb(req, res, (err) => {
    if (err instanceof MulterError) {
      console.log("Something went wrong uploading files. Full error:\n");
      console.log(err);
    } else if (err) {
      console.log("Unknown error occured. Full error:\n");
      console.log(err);
    }

    next();
  });
};

export default uploadWithErrors;
