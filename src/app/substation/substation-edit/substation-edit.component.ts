import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-substation-edit',
  templateUrl: './substation-edit.component.html',
  styleUrls: ['./substation-edit.component.css']
})
export class SubstationEditComponent implements OnInit {
  substationEdit:FormGroup;
  constructor(  
    private formBuilder: FormBuilder,
    private router:Router
    ) { }

  ngOnInit() {
    this.substationEdit = this.formBuilder.group({
      substationName:['',[Validators.required]],
      substationCode:['',[Validators.required]],
      powerTransformer:['',[Validators.required]],
      incommingLine:['',[Validators.required]],
      zoneCode:['',[Validators.required]]
      
    });
  }
}
