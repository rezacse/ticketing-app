import { CustomError, CustomErrorItem } from "./custom-error";

export class NotAuthorizedError extends CustomError {
  statusCode = 401;
  constructor() {
    super("Not authorized");

    Object.setPrototypeOf(this, NotAuthorizedError.prototype);
  }

  serializeErrors() {
    return [new CustomErrorItem("Not authorized")];
  }
}

// export default {
//   NotFoundError
// }
