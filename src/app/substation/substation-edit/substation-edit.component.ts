import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ZoneService } from 'src/app/services/zone.service';
import { Zone } from 'src/app/model/zone.model';

@Component({
  selector: 'app-substation-edit',
  templateUrl: './substation-edit.component.html',
  styleUrls: ['./substation-edit.component.css']
})
export class SubstationEditComponent implements OnInit {
  substationEdit:FormGroup;
  zones:Zone[];
  constructor(  
    private formBuilder: FormBuilder,
    private router:Router,
    private zoneService:ZoneService
    ) { }

  ngOnInit() {
    this.substationEdit = this.formBuilder.group({
      substationName:['',[Validators.required]],
      substationCode:['',[Validators.required]],
      powerTransformer:['',[Validators.required]],
      incommingLine:['',[Validators.required]],
      zoneCode:['',[Validators.required]]
      
    });

    this.zoneService.getAllZone().subscribe(data=>{
      this.zones=data;
      console.log(this.zones);
    });
  }
}
