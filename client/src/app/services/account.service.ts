import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { IUser } from '../models/iuser';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  //baseUrl = "https://localhost:5001/api/";

  baseUrl = environment.apiUrl;

  private currentUserSource = new BehaviorSubject<IUser | null>(null);

  // $ signifies it is unobservable
  currentUser$ = this.currentUserSource.asObservable();


  constructor(private http: HttpClient) { }

  login(model : any){
    return this.http.post<IUser>(this.baseUrl + 'account/login',model).pipe(
      map((response : IUser) => {
        const user = response;
        if(user){
          localStorage.setItem('user',JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    );
  }

  register(model : any){
    return this.http.post<IUser>(this.baseUrl + 'account/register', model).pipe(map(user => {
      if(user){
        localStorage.setItem('user',JSON.stringify(user));
        this.currentUserSource.next(user);
      }
      return user;
    }));
  }

  setCurrentUser(user : IUser){
    this.currentUserSource.next(user);
  }


  logout(){
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }


}
