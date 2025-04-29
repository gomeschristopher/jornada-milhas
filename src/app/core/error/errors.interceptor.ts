import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { MessageService } from '../services/message.service';

@Injectable()
export class ErrorsInterceptor implements HttpInterceptor {

  constructor(private messageService: MessageService) {}

  intercept(request: HttpRequest<HttpErrorResponse>, next: HttpHandler): Observable<HttpEvent<HttpErrorResponse>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'Unknown error occurred';

        if (error.error instanceof ErrorEvent) {
          errorMessage = `Client error: ${error.error.message}`;
        } else if (error.status === 404)  {
          errorMessage = `Resource not found: ${error.message}`;
        } else if (error.status === 500) {
          errorMessage = `Server error: ${error.message}`;
        } else if (error.status === 401) {
          errorMessage = `Unauthorized: ${error.message}`;
        }

        this.messageService.openSnackBar(errorMessage);

        return throwError(() => new Error(`Something went wrong`));
      })
    );
  }
}
