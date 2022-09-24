import { ValidationError } from 'express-validator';
import { CustomError, CustomErrorItem } from './custom-error';

export class RequestValidationError extends CustomError {
  statusCode = 400;
  constructor(private errors: ValidationError[]){
    super('Invalid request');

    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  
  serializeErrors() {
    return this.errors.map(e=> new CustomErrorItem(e.msg, e.param));
  }
}

// export default {
//   RequestValidationError
// }