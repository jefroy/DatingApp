import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError(error => {
                if (error.status === 401) { return throwError(error.statusText); }

                if (error instanceof HttpErrorResponse){
                    const applicationError = error.headers.get('Application-Error'); // get header with the application error

                    if (applicationError) { return throwError(applicationError); }

                    const serverError = error.error;
                    let modalStateErrors = '';
                    if (serverError.errors && typeof serverError.error === 'object'){
                        for (const key in serverError.errors){
                            if (serverError.errors[key]){
                                modalStateErrors += serverError.errors[key] + '\n';
                            }
                        }
                    }
                    return throwError(modalStateErrors || serverError || 'Unknown Server Error!');
                }
            })
        );
    }
}

// add to the list of other providers
export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
};
