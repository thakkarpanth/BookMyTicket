import { CustomError } from "./custom-error";

export class DatabaseConnectionError extends CustomError {
  reason = "Error connecting to database";
  statusCode = 500 ; 
  constructor() {
    super('Error Connecting To DB');
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);

  }

  serializeErrors() {
    return [
      {
        message: this.reason
      }
    ]
  }

}