import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Club, Result } from '../club';
import { ClubService } from '../club.service';

@Component({
  selector: 'manutdcomponent',
  templateUrl: './manutd.component.html',
  styleUrls: ['./manutd.component.css']
})
export class ManutdComponent implements OnInit {
  club!: Club;
  constructor(
    private clubService: ClubService,
  ) {}

  ngOnInit(): void {
    this.getClub();
  }

  getClub(): void{
    this.clubService.getClub().subscribe((data: Result) => {
      this.club = data.response[0];
      console.log(this.club);
  });
  }

}
