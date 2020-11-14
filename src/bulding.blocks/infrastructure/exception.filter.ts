import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { exception } from 'console';
import { Request, Response } from 'express';
import { HcException } from '../domain/hc.exception';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    
    const code = 
      exception instanceof HcException
      ? exception.getErrorNumber()
      : status;

  
    const message = 
    exception instanceof Error 
    ? exception.message
    : "";

    response.status(status).json({
      statusCode: code,
      message: message
    });
  }
}