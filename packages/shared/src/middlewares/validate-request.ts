import { Request, Response, NextFunction } from 'express';
import { ZodSchema } from 'zod';
import { RequestValidationError } from '../errors/request-validation-error';

export const validateRequest = (schema: ZodSchema<any>) => (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    schema.parse(req.body);
    next();
  } catch (err) {
    if (err instanceof Error && 'errors' in err) {
      next(new RequestValidationError((err as any).errors));
    } else {
      next(err);
    }
  }
};
