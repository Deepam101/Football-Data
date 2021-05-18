import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Club, Result } from './club';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    // 'x-apisports-key': '4434976b11e81bb0f64795765330dde7'
  })
};
const url: string = "https://v3.football.api-sports.io/teams?id=33";

@Injectable({
  providedIn: 'root'
})
export class ClubService {
  club_info: Observable<Result> | undefined;

  constructor(
    private http: HttpClient,
  ) { }

  getClub(): Observable<Result>{
    this.club_info = this.http.get<Result>(url, httpOptions).pipe(
      tap(_ => console.log('fetched club')),
      catchError(this.handleError)
    );;
    return this.club_info;
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
