import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-server-error',
  templateUrl: './server-error.component.html',
  styleUrl: './server-error.component.css'
})
export class ServerErrorComponent implements OnInit{

  err : any;

  constructor(private router: Router){
    const naviagtion = this.router.getCurrentNavigation();
    this.err = naviagtion?.extras?.state?.['error'];
  }

  ngOnInit(): void {
    
  }

}
