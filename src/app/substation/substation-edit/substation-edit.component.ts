import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ZoneService } from 'src/app/services/zone.service';
import { Zone } from 'src/app/model/zone.model';
import { SubstationService } from 'src/app/services/substation.service';
import { Substation } from 'src/app/model/substation.model';
import { SubstationZone } from 'src/app/model/substation-zone.model';
import { SessionStorage } from 'src/app/model/session-storage.model';


@Component({
  selector: 'app-substation-edit',
  templateUrl: './substation-edit.component.html',
  styleUrls: ['./substation-edit.component.css']
})
export class SubstationEditComponent implements OnInit {
  substationEdit:FormGroup;
  substation:any;
  zone:any;
  zones:Zone[];
  subZone:any;
  

  record:Substation={
    id:"",
    substationName:"",
    substationCode:"",
    zoneId:"",
    powerTransformer:"",
    incomingLines:""
   
  };
  constructor(  
    private formBuilder: FormBuilder,
    private router:Router,
    private zoneService:ZoneService,
    private session:SessionStorage,
    private subStationService:SubstationService
    ) { }

  ngOnInit() {
    this.substationEdit = this.formBuilder.group({
      id:[this.record.id,''],
      substationName:[this.record.substationName,''],
      substationCode:[this.record.substationCode,''],
      powerTransformer:[this.record.powerTransformer,[Validators.required]],
      incomingLines:[this.record.incomingLines,[Validators.required]],
      zoneCode:[this.record.zoneId,[Validators.required]]
      
    });

    this.zoneService.getAllZone().subscribe(data=>{
      this.zones=data;
      
    });
    

    this.subZone=this.session.storage;
    this.substation=this.subZone.substation;
    this.zone=this.subZone.zone;
   

    this.record.id=this.substation.id;
    this.record.substationName=this.substation.substationName;
    this.record.substationCode=this.substation.substationCode;
    this.record.zoneId=this.zone.id;
    this.record.powerTransformer=this.substation.powerTransformer;
    this.record.incomingLines=this.substation.incomingLines;
    console.log("record id"+this.record.id);
  }
  back(){
    this.router.navigate(['substation-list']);
  }
  reset(){
    this.substationEdit.reset();
}
onSubmit(){
  
    this.subStationService.updateSubstation(this.substationEdit.value).subscribe(data=>{
    this.router.navigate(['substation-list']);
  })
   
  }
}
