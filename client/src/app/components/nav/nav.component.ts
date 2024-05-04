import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { Observable, of } from 'rxjs';
import { IUser } from '../../models/iuser';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit{

  model : any = {}
  //loggedIn = false;
  //currentUser$ : Observable<IUser | null> = of(null);

  constructor(public accountService: AccountService, private router: Router, 
              private toastr: ToastrService) {
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
        this.router.navigateByUrl('/members');
        //console.log(response);
        //this.loggedIn = true;
      },
      //error : error => this.toastr.error(error.error,'Major-Error',{positionClass : 'toast-bottom-right'})
      // Now we are using it in interceptor so no need to use it here...
      //error : error => this.toastr.error(error.error)
    });
  }

  logout(){
    this.accountService.logout();
    this.router.navigateByUrl('/');
    //this.loggedIn = false;
  }

}
