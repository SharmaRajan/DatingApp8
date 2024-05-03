import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{

  //@Input() usersFromHomeComponent: any;

  @Output() cancelRegister = new EventEmitter();

  model : any = {}

  constructor(private accountService: AccountService){}

  ngOnInit(): void {
    
  }

  register(){
    //console.log(this.model);
    this.accountService.register(this.model).subscribe({
      next: response => {
        console.log(response);
        this.cancel();
      },
      error: error => console.log(error)
    });
  }

  cancel(){
    this.cancelRegister.emit(false);
  }

}