import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  
  registerMode = false;

  users: any;

  baseUrl : string = "https://localhost:5001/api/users";
  
  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.getUsers();
  }

  registerToggle(){
    this.registerMode = !this.registerMode;
  }

  getUsers(){
    this.http.get(this.baseUrl).subscribe({
      next : response => this.users = response,
      error: (error) => console.log(error),
      complete: () => console.log('Request has completed')
    });
  }

}
