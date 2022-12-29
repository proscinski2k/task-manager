import { HttpException, HttpStatus } from '@nestjs/common';

export class MyHttpException extends HttpException {
  errors: string[];
  constructor(errors: string[]) {
    super('Błąd', HttpStatus.BAD_REQUEST);
    this.errors = errors;
  }

  getResponse() {
    return {
      statusCode: HttpStatus.BAD_REQUEST,
      message: this.errors,
      timestamp: new Date().toISOString(),
    };
  }
}