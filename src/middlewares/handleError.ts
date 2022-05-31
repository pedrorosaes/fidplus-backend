import { Request, Response } from "express";
import { ValidationError } from "express-validation";

const handleError = (
  error: { status: number; message: string },
  req: Request,
  res: Response
) => {
  if (error instanceof ValidationError) {
    return res.status(error.statusCode).json(error);
  }
  return res.status(500).json(error);
};

export { handleError };
