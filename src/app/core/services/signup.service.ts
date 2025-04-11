import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../types/types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  cadastrar(user: User): Observable<User> {
    console.log(user);
    return this.http.post<User>(`${this.apiUrl}/auth/cadastro`, {
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
