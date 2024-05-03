import { Component, OnInit } from '@angular/core';
import { AccountService } from './services/account.service';
import { IUser } from './models/iuser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Dating app';

  //users: any;

  //baseUrl : string = "https://localhost:5001/api/users";

  constructor( private accountService: AccountService){}

  ngOnInit(): void {
    //this.getUsers();
    this.setCurrentUser();
  }

  
  setCurrentUser(){
    // ! is used to effectively turns off typescript safety
    //const user: IUser = JSON.parse(localStorage.getItem('user')!);

    // another way to get the user
    const userString = localStorage.getItem('user');
    if(!userString) return;

    const user: IUser = JSON.parse(userString);

    this.accountService.setCurrentUser(user);
  }

}
