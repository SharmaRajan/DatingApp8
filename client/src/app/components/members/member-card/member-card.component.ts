import { Component, Input, OnInit } from '@angular/core';
import { IMember } from '../../../models/imember';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrl: './member-card.component.css'
})
export class MemberCardComponent implements OnInit{

  //@Input() member : IMember = {} as IMember;

  @Input() inputMember : IMember | undefined;
  constructor(){}

  ngOnInit(): void {
    
  }

}
