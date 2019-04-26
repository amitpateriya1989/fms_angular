import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl,FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { controlNameBinding } from '@angular/forms/src/directives/reactive_directives/form_control_name';
@Component({
  selector: 'app-substation-add',
  templateUrl: './substation-add.component.html',
  styleUrls: ['./substation-add.component.css']
})
export class SubstationAddComponent implements OnInit {
  substation:FormGroup;
  TotalRow:number;
  addLines=false;
  constructor(
    private formBuilder: FormBuilder,
    private router:Router
    ) { }

  ngOnInit() {
    this.substation = this.formBuilder.group({
      substationName:['',[Validators.required]],
      substationCode:['',[Validators.required]],
      powerTransformer:['',[Validators.required]],
      incommingLine:['',[Validators.required]],
      zoneCode:['',[Validators.required]],
      itemRows:this.formBuilder.array([this.initItemRow()])
     
      
    });

  }
  initItemRow(){
    return this .formBuilder.group({
      name:['']
    })
    
  }
  back(){
    this.router.navigate(['dashboard']);
  }
  addNewRow(){
    const control=<FormArray>this.substation.controls['itemRows'];
    console.log("add:"+control.value.length);
    control.push(this.initItemRow());

  }
  deleteRow(){
    this.addLines=false;
    const control=<FormArray>this.substation.controls['itemRows'];
    if(control!=null){
      this.TotalRow= control.value.length;
      console.log("delete:"+this.TotalRow);
    }
    
    var i:number=0;
    for (i;i<=this.TotalRow;i++){
      control.removeAt(i);
    }
  
    
  }
 
 
  addFeeder(){
    this.deleteRow();
    this.addLines=true;
    var i:number=1;
  
    for(i;i<this.substation.value.incommingLine;i++){
      this.addNewRow();
    }
  }
}
