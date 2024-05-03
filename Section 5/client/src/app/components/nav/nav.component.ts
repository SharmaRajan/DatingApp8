import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { Observable, of } from 'rxjs';
import { IUser } from '../../models/iuser';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit{

  model : any = {}
  //loggedIn = false;
  //currentUser$ : Observable<IUser | null> = of(null);

  constructor(public accountService: AccountService) {
  }

  ngOnInit(): void {
    //this.getCurrentUser();
    //this.currentUser$ = this.accountService.currentUser$;
  }

  // this is for persistent login
  // getCurrentUser(){
  //   this.accountService.currentUser$.subscribe({
  //     // !! change user object into boolean
  //     next : user => this.loggedIn = !!user,
  //     error : error => console.log(error)
  //   });
  // }

  login(){
    console.log(this.model);
    this.accountService.login(this.model).subscribe({
      next : response => {
        console.log(response);
        //this.loggedIn = true;
      },
      error : error => console.log(error)
      
    });
  }

  logout(){
    this.accountService.logout();
    //this.loggedIn = false;
  }

}
