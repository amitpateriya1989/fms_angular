import { Injectable } from '@angular/core';

import { GenerateUrl } from '../model/generate-url.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Substation } from '../model/substation.model';
import { SubstationZone } from '../model/substation-zone.model';

@Injectable({
  providedIn: 'root'
})
export class SubstationService {
  substation:SubstationZone;
  baseUrl: string = this.url.substationServiceUrl;

  constructor(private http: HttpClient, private url: GenerateUrl) { }

  getAllSubstation(): Observable<any> {
    return this.http.get(this.baseUrl + '/all');
  }

  saveSubStation(substation: Substation): Observable<any> {

    return this.http.post(this.baseUrl + "/save_substation", substation);
  }

  deleteSubstation(substation:Substation):Observable<any>{
    return this.http.post(this.baseUrl+'/delete',substation);
  }
  updateSubstation(substation:Substation):Observable<any>{
    return this.http.post(this.baseUrl+'/update',substation);
  }


}
