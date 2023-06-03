import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const auth = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    const { JWT_SECRET: JWT_SECRET_ENV } = process.env;
    if (token) {
      const decodedData = jwt.verify(token, JWT_SECRET_ENV || "");

      // Setting the userId in Request using declaration merging
      req.userId = (decodedData as any)?.id;

      next();
    } else {
      console.log("No token provided");
    }
  } catch (error) {
    console.log(error);
  }
};

export default auth;
