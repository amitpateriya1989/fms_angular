import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Feeder } from 'src/app/model/feeder.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GenerateUrl } from 'src/app/model/generate-url.model';
import { FeederService } from 'src/app/services/feeder.service';

@Component({
  selector: 'app-feeder-list',
  templateUrl: './feeder-list.component.html',
  styleUrls: ['./feeder-list.component.css']
})
export class FeederListComponent implements OnInit {
  feederList:Feeder[];
 
  constructor(
   
    private router:Router,
    private url:GenerateUrl,private feederService:FeederService
    ) { }

  ngOnInit() {
    this.feederService.getAllFeeder().subscribe(data=>{
      console.log(data);
      this.feederList=data;
    });   
  }
  add(){
    this.router.navigate(['feeder-add']);
  }
  edit(){
    this.router.navigate(['feeder-edit']);
  }
}
