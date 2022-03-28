import { HttpErrorResponse, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {
  public token:any;
  
  constructor(public router:Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {

    this.token = localStorage.getItem('token');

    if (this.token == null) {
      this.token = '';
    }

    let request = req;

    if (this.token) {
      request = req.clone({
        setHeaders: {
          authorization: 'Bearer ' + this.token,
         
        }
    
      });

    }

    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401) {
          this.router.navigateByUrl('/login')
        }

        return throwError(err);

      })
    );
  }

  
}
