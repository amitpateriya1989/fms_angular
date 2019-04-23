import { Injectable } from '@angular/core';

@Injectable({
    providedIn: "root"
  })
export class GenerateUrl {
     //baseUrl :string= 'https://services.mpcz.in/serviceportal';
    //baseUrl: string = 'https://rooftop-uat.mpcz.in:8443/serviceportal';
    baseUrl: string = 'http://localhost:8080/fms';
	loginServiceUrl:string=this.baseUrl+'/api/loginController';
   
}
