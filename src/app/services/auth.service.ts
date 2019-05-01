import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getCurrentUser() {
    return sessionStorage.getItem("user")
  }

  getToken() {
    return sessionStorage.getItem("isLoggedIn")
  }
  isLoggednIn() {
    return this.getToken() !== null;
  }
}
