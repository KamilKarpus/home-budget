import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';
import { HcException } from '../domain/hc.exception';

@Catch(HcException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HcException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    response
      .status(500)
      .json({
        statusCode: exception.getErrorNumber(),
        error: exception.message
      });
  }
}