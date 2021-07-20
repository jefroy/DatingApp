import { Component, OnInit } from '@angular/core';
import {Member} from '../../_models/member';
import {MembersService} from '../../_services/members.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  // observable member array, to be used with the async pipe?
  members$: Observable<Member[]>; // $ => observable object/var

  constructor(private memberService: MembersService ) { }

  ngOnInit(): void {
    this.members$ = this.memberService.getMembers();
  }

}
