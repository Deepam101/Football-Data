import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Club, PlayerFetch, Result, Statistics } from './club';
import { catchError, map, tap } from 'rxjs/operators';



const url: string = "https://v3.football.api-sports.io/teams";
const stat: string = "https://v3.football.api-sports.io/teams/statistics";
const players: string = "https://v3.football.api-sports.io/players"
@Injectable({
  providedIn: 'root'
})
export class ClubService {
  club_info: Observable<Result> | undefined;

  constructor(
    private http: HttpClient,
  ) { }

  getClub(teamname: string): Observable<Result>{
    let httpOptions = {
      headers: new HttpHeaders({
        'x-apisports-key': '7d29aec1b8a2b24667f2742b364d65c6'
      }),
      params: new HttpParams({fromString: 'name='+teamname})
    }
    this.club_info = this.http.get<Result>(url, httpOptions).pipe(
      tap(_ => console.log('fetched club')),
      catchError(this.handleError)
    );
    return this.club_info;
  }
  getStat(teamid: string){
    let query = {
      headers: new HttpHeaders({
        'x-apisports-key': '7d29aec1b8a2b24667f2742b364d65c6'
      }),
      params: new HttpParams({fromString: 'season=2020&team='+teamid+'&league=39'})
    };
    return this.http.get<Statistics>(stat, query).pipe(
      tap(_ => console.log('fetched data')),
      catchError(this.handleError)
    );
  }
  getPlayers(teamid: string){
    let player_team = {
      headers: new HttpHeaders({
        'x-apisports-key': '7d29aec1b8a2b24667f2742b364d65c6'
      }),
      params: new HttpParams({fromString: 'team='+teamid+'&season=2020'})
    };
    return this.http.get<PlayerFetch>(players, player_team).pipe(
      tap(_ => console.log('fetched players')),
      catchError(this.handleError)
    );
  }
  
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
