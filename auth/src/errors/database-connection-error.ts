import { CustomError, CustomErrorItem } from './custom-error';

export class DatabaseValidationError extends CustomError {
  statusCode = 500;
  reason = "Database connection error";
  constructor(){
    super('Error while connecting database ');
    
    Object.setPrototypeOf(this, DatabaseValidationError.prototype);
  }

  serializeErrors() {
    return [new CustomErrorItem(this.reason)];
  }
}

// export default {
//   DatabaseValidationError
// }