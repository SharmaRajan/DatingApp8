import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, catchError } from 'rxjs';

// export const errorInterceptor: HttpInterceptorFn = (req, next) => {
//   return next(req);
// };

@Injectable()
export class ErrorInterceptor implements HttpInterceptor{
  
  constructor(private router : Router, private toaster: ToastrService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err : HttpErrorResponse) => {
        if(err){
          switch(err.status){
            case 400:
              if(err.error.errors){
                const modelStateErrors = [];
                for(const key in err.error.errors){
                  if(err.error.errors[key]){
                    modelStateErrors.push(err.error.errors[key]);
                  }
                }
                throw modelStateErrors;
              }else{
                this.toaster.error(err.error, err.status.toString());
              }
              break;
            case 401:
              this.toaster.error('Unauthorized', err.status.toString());
              break;
            case 404:
              this.router.navigateByUrl('/not-found');
              break;
            case 500:
              const navigationExtras : NavigationExtras = {state: {error: err.error}};
              this.router.navigateByUrl('/server-error',navigationExtras);
              break; 
            default:
              this.toaster.error('Something unexpected went wrong');
              console.log(err);
              break;      
          }
        }
        throw err;
      })
    )
  }
  
}