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
  clubname: string = 'manchester united';
  clubid: string = '33';

  constructor(
    private clubService: ClubService,
  ) {}

  search(name:string){
    this.clubname=name;
    this.getClub().then(() => {
      console.log("before" + this.club.team.id);
      this.clubid = this.club.team.id.toString();
      this.getStat();
      this.getPlayers();
    });
    
  }

  ngOnInit(): void {
    this.getClub();
    this.getStat();
    this.getPlayers();
    
  }

  getClub(): Promise<void>{
    return new Promise<void>((resolve) => {
    console.log(this.clubname);
    this.clubService.getClub(this.clubname).subscribe((data: Result) => {
      this.club = data.response[0];
      console.log(this.club);
      console.log('resolved');
      resolve();
    })
    
  });
  }
  getStat(): void{
    this.clubService.getStat(this.clubid).subscribe((data: Statistics) => {
      this.stat = data.response;
      console.log(data.response);
    });
  }
  getPlayers(): void{
    console.log(this.clubid)
    this.clubService.getPlayers(this.clubid).subscribe((data:PlayerFetch) => {
      this.players = data.response;
      console.log(data);
    });
  }
  
}
