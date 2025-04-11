import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

import { TokenService } from './token.service';
import { State, User } from '../types/types';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl: string = environment.apiUrl;

  private userSubject = new BehaviorSubject<User | null>(null);

  constructor(private tokenService: TokenService,
    private http: HttpClient
  ) {
    if (tokenService.hasToken()) {
      this.decodeJwt();
    }
  }

  decodeJwt() {
    const token = this.tokenService.getToken();
    const user = jwtDecode(token!) as any;

    this.userSubject.next({
      name: user['nome'],
      birth: user['nascimento'],
      documentId: user['cpf'],
      phone: user['telefone'],
      email: user['email'],
      password: user['senha'],
      city: user['cidade'],
      state: user['estado'],
      gender: user['genero']
    });
  }

  getUser() {
    return this.userSubject.asObservable();
  }

  saveToken(token: string) {
    this.tokenService.setToken(token);
    this.decodeJwt();
  }

  logout() {
    this.tokenService.removeToken();
    this.userSubject.next(null);
  }

  isLogged() {
    return this.tokenService.hasToken();
  }

  fetchUser() {
    return this.http.get<{
      nome: string,
      email: string,
      senha: string,
      nascimento: string,
      cpf: string,
      telefone: string,
      cidade: string,
      estado: State,
      genero: string
    }>(`${this.apiUrl}/auth/perfil`);
  }

  editUser(user: User):
    Observable<User> {

    return this.http.patch<User>(`${this.apiUrl}/auth/perfil`,
      {
        nome: user.name,
        email: user.email,
        senha: user.password,
        nascimento: user.birth,
        cpf: user.documentId,
        telefone: user.phone,
        cidade: user.city,
        estado: user.state
      });
  }
}
