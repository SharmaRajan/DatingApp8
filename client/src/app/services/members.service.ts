import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IMember } from '../models/imember';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getMembers(){
    // return this.http.get<IMember[]>(this.baseUrl + 'users', this.getHttpOptions());

    // Now JwtInterceptor will do the work of Dependency injection 
    return this.http.get<IMember[]>(this.baseUrl + 'users');
  }

  getMember(username: string){
    // return this.http.get<IMember>(this.baseUrl + 'users/' + username, this.getHttpOptions());

    // Now JwtInterceptor will do the work of Dependency injection 
    return this.http.get<IMember>(this.baseUrl + 'users/' + username);
  }

  // getHttpOptions() {
  //   const userString = localStorage.getItem('user');
  //   if(!userString) return;

  //   const user = JSON.parse(userString);

  //   return {
  //     headers : new HttpHeaders({
  //       Authorization: 'Bearer ' + user.token
  //     })
  //   }
  // }

}
