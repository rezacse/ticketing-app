import { CustomError, CustomErrorItem } from './custom-error';

export class NotFoundError extends CustomError {
  statusCode = 404;
  constructor() {
    super('Route not found');

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors() {
    return [new CustomErrorItem('Not found')];
  }
}

// export default {
//   NotFoundError
// }