import { Injectable } from '@angular/core';

import { GenerateUrl } from '../model/generate-url.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubstationService {

  baseUrl: string = this.url.substationServiceUrl;

  constructor(private http: HttpClient,private url:GenerateUrl) { }

  getAllSubstation():Observable<any> {
    return this.http.get(this.baseUrl+'/all');
  }

}
