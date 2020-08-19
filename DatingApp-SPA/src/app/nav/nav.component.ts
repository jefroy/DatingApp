import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {}; // store username and pw from the html

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  // login method
  login(){
    // console.log(this.model); // make sure everything is hooked up
    this.authService.login(this.model).subscribe(next => {
      console.log('Logged in successfully');
    }, error => {
      console.log(error);
    });
  }

  loggedIn(){
    const token = localStorage.getItem('token');
    return !!token; // if the token is empty, return false
  }

  logout(){
    localStorage.removeItem('token');
    console.log('logged out');
  }

}
