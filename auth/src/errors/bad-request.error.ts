import { CustomError, CustomErrorItem } from "./custom-error";

export class BadRequestError extends CustomError {
  statusCode = 400;
  constructor(public message: string) {
    super(message);

    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  serializeErrors() {
    return [new CustomErrorItem(this.message)];
  }
}

// export default {
//   NotFoundError
// }
