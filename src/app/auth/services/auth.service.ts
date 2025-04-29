import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { environment } from 'src/environments/environment';
import { UserService } from './user.service';

interface AuthResponse {
  access_token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl: string = environment.apiUrl

  constructor(private http: HttpClient,
    private userService: UserService
  ) { }

  login(email: string, password: string): Observable<any> {

    return this.http.post<AuthResponse>(
      `${this.apiUrl}/auth/login`,
      { email, senha: password },
      { observe: 'response' }
    ).pipe(
      tap((response) => {
        const authToken = response.body?.access_token || '';
        this.userService.saveToken(authToken);
      })
    );
  }
}
