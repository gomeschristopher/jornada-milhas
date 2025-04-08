import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { State } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private apiUrl: string = environment.apiUrl
  private cache$?: Observable<State[]>;

  constructor(
    private http: HttpClient
  ) { 
  }

  list() : Observable<State[]> {
    if (!this.cache$) {
      this.cache$ = this.requestStates().pipe(
        shareReplay(1)
      );
    }

    return this.cache$;
  }

  private requestStates(): Observable<State[]> {
    return this.http.get<State[]>(`${this.apiUrl}/estados`);
  }
}