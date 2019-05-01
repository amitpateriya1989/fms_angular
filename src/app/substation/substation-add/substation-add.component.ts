import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl,FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { controlNameBinding } from '@angular/forms/src/directives/reactive_directives/form_control_name';
import { ZoneService } from 'src/app/services/zone.service';
import { Zone } from 'src/app/model/zone.model';
import { SubstationService } from 'src/app/services/substation.service';
@Component({
  selector: 'app-substation-add',
  templateUrl: './substation-add.component.html',
  styleUrls: ['./substation-add.component.css']
})
export class SubstationAddComponent implements OnInit {
  substation:FormGroup;
  TotalRow:number;
  addLines=false;
  zones:Zone[];
  constructor(
    private formBuilder: FormBuilder,
    private router:Router,
    private zoneService:ZoneService,
    private subStationService:SubstationService
    ) { }

  ngOnInit() {
    this.substation = this.formBuilder.group({
      substationName:['',[Validators.required]],
      substationCode:['',[Validators.required]],
      powerTransformer:['',[Validators.required]],
      incomingLines:['',[Validators.required]],
      zoneId:['',[Validators.required]],
      substationFeederInterface:this.formBuilder.array([this.initItemRow()])
     
      
    });
     
    this.zoneService.getAllZone().subscribe(data=>{
      this.zones=data;
      console.log(this.zones);
    });
  }
  initItemRow(){
    return this .formBuilder.group({
      substationFeederName:['']
    })
    
  }
  back(){
    this.router.navigate(['substation-list']);
  }
  addNewRow(){
    const control=<FormArray>this.substation.controls['substationFeederInterface'];
    control.push(this.initItemRow());
    
  }
  deleteRow(){
    this.addLines=false;
    const control=<FormArray>this.substation.controls['substationFeederInterface'];
     if(control!=null){
      this.TotalRow= control.value.length;
   }
      var i:number=0;
      for (i;i<=this.TotalRow;i++){
        control.removeAt(0);
      }
  }
    
  addFeederIncomingLines(){
    this.deleteRow();
    this.addLines=true;
    var i:number=0;
    for(i;i<this.substation.value.incomingLines;){
      this.addNewRow();
      i++;
    }
   
  }
  
  reset(){
    this.substation.reset();
}

  onSubmit(){
  this.subStationService.saveSubStation(this.substation.value).subscribe(data=>{
    this.router.navigate(['substation-list']);
  })
   
  }
}
