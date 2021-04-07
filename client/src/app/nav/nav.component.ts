import { Component, OnInit } from '@angular/core';
import {AccountService} from '../_services/account.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public accountService: AccountService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  login(): void {
    console.log('login: ', this.model);
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
      this.router.navigateByUrl('/members'); // when the user signs in, go to the members page
    }, error => {
    });
  }

  logout(): void {
    this.accountService.logout();
    this.router.navigateByUrl('/'); // when the user signs out, go to the home page
  }

}
