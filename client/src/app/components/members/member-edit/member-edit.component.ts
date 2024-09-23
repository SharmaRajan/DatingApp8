import { Component, OnInit } from '@angular/core';
import { IMember } from '../../../models/imember';
import { IUser } from '../../../models/iuser';
import { AccountService } from '../../../services/account.service';
import { MembersService } from '../../../services/members.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrl: './member-edit.component.css'
})
export class MemberEditComponent implements OnInit{

  memb : IMember | undefined;

  usr : IUser | null = null;

  constructor(private accountService : AccountService, private memberService : MembersService) {
    this.accountService.currentUser$.pipe(take(1)).subscribe({
      next : user => this.usr = user
    });
  }

  ngOnInit(): void {
    this.loadMember();
  }

  loadMember(){
    if(!this.usr) return;

    this.memberService.getMember(this.usr.username).subscribe({
      next : member => this.memb = member

    })
  }

}
