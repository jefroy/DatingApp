import { Component, OnInit } from '@angular/core';
import {AccountService} from '../_services/account.service';
import {Observable} from 'rxjs';
import {User} from '../_models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  currentUser$: Observable<User>;
  loggedIn: boolean;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  login(): void {
    console.log('login: ', this.model);
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
      this.loggedIn = true;
    }, error => {
      console.log(error);
    });
  }

  logout(): void {
    this.accountService.logout();
    this.loggedIn = false;
  }

  getCurrentUser(): void {
    this.accountService.currentUser$.subscribe(user => {
      this.loggedIn = !!user; // !! -> turn object into boolean (null = false)
    }, error => {
      console.log(error);
    });
  }

}
