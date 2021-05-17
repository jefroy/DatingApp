import {Component, OnInit, ViewChild} from '@angular/core';
import {Member} from '../../_models/member';
import {User} from '../../_models/user';
import {AccountService} from '../../_services/account.service';
import {MembersService} from '../../_services/members.service';
import {take} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm;
  member: Member;
  user: User;

  constructor(
    private accountService: AccountService,
    private memberService: MembersService,
    private toastr: ToastrService
  ) {
    this.accountService.currentUser$.pipe(take(1)).subscribe(user => this.user = user);
  }

  ngOnInit(): void {
    this.loadMember();
  }

  loadMember(): void {
    this.memberService.getMember(this.user.username).subscribe(member => {
      this.member = member;
    });
  }

  updateMember(): void {
    console.log(this.member);
    this.toastr.success('Profile Updated ✅');
    this.editForm.reset(this.member);
  }

}
