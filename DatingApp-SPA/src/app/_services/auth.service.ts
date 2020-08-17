import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

// tell the component and service which module is providing this service, and where it is being provided from
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  baseUrl = 'http://localhost:5000/api/auth/';

  constructor(private http:HttpClient) { }

  // tslint:disable-next-line: typedef
  login(model: any){
    return this.http.post(this.baseUrl + 'login', model)
      .pipe(
        map((response: any) =>{
          const user = response;
          if (user){
            localStorage.setItem('token', user.token);
          }
        })
      );
  }

  register(model: any){
    return this.http.post(this.baseUrl + 'register', model);
  }

}
