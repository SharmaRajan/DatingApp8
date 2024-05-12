import { Component, OnInit } from '@angular/core';
import { IMember } from '../../../models/imember';
import { MembersService } from '../../../services/members.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrl: './member-list.component.css'
})
export class MemberListComponent implements OnInit{
  
  memb : IMember[] = [];

  constructor(private memberService: MembersService){}

  ngOnInit(): void {
    this.loadMembers();
  }

  loadMembers(){
    this.memberService.getMembers().subscribe({
      next : members => this.memb = members
    });
  }
}
