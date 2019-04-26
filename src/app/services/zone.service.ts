import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenerateUrl } from '../model/generate-url.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ZoneService {
  baseUrl: string = this.url.locationServiceUrl;

  constructor(private http: HttpClient,private url:GenerateUrl) { }

  getAllZone():Observable<any> {
    return this.http.get(this.baseUrl+'/zone');
  }


}
