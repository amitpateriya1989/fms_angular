import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { resetCompiledComponents } from '@angular/core/src/render3/jit/module';
import { GenerateUrl } from 'src/app/model/generate-url.model';
import { FeederService } from 'src/app/services/feeder.service';
import { SubstationService } from 'src/app/services/substation.service';
import { Substation } from 'src/app/model/substation.model';

@Component({
  selector: 'app-feeder-add',
  templateUrl: './feeder-add.component.html',
  styleUrls: ['./feeder-add.component.css']
})
export class FeederAddComponent implements OnInit {
  feeder:FormGroup;
  substationList:Substation[];
  constructor( private formBuilder: FormBuilder,  private router:Router,
    private url:GenerateUrl,private feederService:FeederService,
    private substationService:SubstationService
    ) { }

  ngOnInit() {
    this.feeder = this.formBuilder.group({
      substationId:['',[Validators.required]],
      feederName:['',[Validators.required]]
     
      
    });
    this.getAllSubstation();

    
    }
    back(){
      this.router.navigate(['dashboard']);
    }
    reset(){
      this.feeder.reset();
  }
  onSubmit(){
    this.feederService.saveFeeder(this.feeder.value).subscribe(data=>{
      this.router.navigate(['feeder-list']);
    })
     
    }
    getAllSubstation() {
      this.substationService.getAllSubstation().subscribe(data => {
        console.log(data);
        this.substationList = data;
      });
    }
}
