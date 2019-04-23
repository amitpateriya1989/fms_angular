import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { timeout } from 'rxjs/operators';
import { GenerateUrl } from '../model/generate-url.model';
import { Login } from '../model/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl: string = this.url.loginServiceUrl;

  constructor(private http: HttpClient,private url:GenerateUrl) { }

 loginVerification(login: Login):Observable<any> {
    return this.http.post<Response>(this.baseUrl + "/verification", login).pipe(timeout(5000));
  }

 
 
}
