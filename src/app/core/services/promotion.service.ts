import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Promotion } from '../types/types';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  list(): Observable<Promotion[]> {
    return this.http.get<Promotion[]>(`${this.apiUrl}/promocoes`);
  }
}
