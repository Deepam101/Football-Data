import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Club, PlayerFetch, Players, Result, Statistics, Stats } from '../club';
import { ClubService } from '../club.service';

@Component({
  selector: 'manutdcomponent',
  templateUrl: './manutd.component.html',
  styleUrls: ['./manutd.component.css']
})
export class ManutdComponent implements OnInit {
  club!: Club;
  stat!: Stats;
  players!: Players[];
  constructor(
    private clubService: ClubService,
  ) {}

  ngOnInit(): void {
    this.getClub();
    this.getStat();
    this.getPlayers();
  }

  getClub(): void{
    this.clubService.getClub().subscribe((data: Result) => {
      this.club = data.response[0];
      console.log(this.club);
  });
  }
  getStat(): void{
    this.clubService.getStat().subscribe((data: Statistics) => {
      this.stat = data.response;
      console.log(data.response);
    });
  }
  getPlayers(): void{
    this.clubService.getPlayers().subscribe((data:PlayerFetch) => {
      this.players = data.response;
      console.log(data);
    });
  }
}
