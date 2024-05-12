import { Component, OnInit } from '@angular/core';
import { IMember } from '../../../models/imember';
import { MembersService } from '../../../services/members.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../modules/shared.module';
import { GalleryItem, GalleryModule, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-member-detail',
  standalone : true,
  templateUrl: './member-detail.component.html',
  styleUrl: './member-detail.component.css',
  imports : [CommonModule, SharedModule, GalleryModule]
})

export class MemberDetailComponent implements OnInit{

  mem : IMember | undefined;

  imgs : GalleryItem[] = [];

  constructor(private memberService: MembersService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.loadMember();
  }


  loadMember(){
    var userName = this.route.snapshot.paramMap.get('username');

    if(!userName) return;

    this.memberService.getMember(userName).subscribe({
      next : member => {
        this.mem = member,
        this.getImages()
      }
    });
  }

  getImages(){
    if(!this.mem) return;

    for(const photo of this.mem.photos){
      this.imgs.push(new ImageItem({src : photo.url, thumb : photo.url}));
    }
  }

}
