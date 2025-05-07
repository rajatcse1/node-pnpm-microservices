import { CustomError } from './custom-error';
import { ZodError } from 'zod';

export class RequestValidationError extends CustomError {
  statusCode = 400;

  constructor(public errors: ZodError['errors']) {
    super('Invalid request parameters');
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return this.errors.map(err => ({
      message: err.message,
      field: err.path.join('.'),
    }));
  }
}
