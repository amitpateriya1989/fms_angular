import { Injectable } from '@angular/core';
import { GenerateUrl } from '../model/generate-url.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Substation } from '../model/substation.model';
import { Feeder } from '../model/feeder.model';
@Injectable({
  providedIn: 'root'
})
export class FeederService {
  baseUrl: string = this.url.feedeerServiceUrl;

  constructor(private http: HttpClient, private url: GenerateUrl) { }

  getAllFeeder(): Observable<any> {
    return this.http.get(this.baseUrl + '/all');
  }

  saveFeeder(feeder:Feeder): Observable<any> {
    return this.http.post(this.baseUrl + '/save',feeder);
  }

  /* saveSubStation(substation: Substation): Observable<any> {

    return this.http.post(this.baseUrl + "/save_substation", substation);
  } */
}
