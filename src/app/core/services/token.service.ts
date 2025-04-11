import { Injectable } from '@angular/core';

const KEY = 'TOKEN';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  setToken(token: string) {
    return localStorage.setItem(KEY, token);
  }

  getToken() {
    return localStorage.getItem(KEY) || '';
  }

  removeToken() {
    return localStorage.removeItem(KEY);
  }

  hasToken() {
    return !!this.getToken();
  }
}
