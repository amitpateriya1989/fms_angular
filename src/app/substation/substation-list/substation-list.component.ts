import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GenerateUrl } from 'src/app/model/generate-url.model';
import { SubstationService } from 'src/app/services/substation.service';
import { Substation } from 'src/app/model/substation.model';

@Component({
  selector: 'app-substation-list',
  templateUrl: './substation-list.component.html',
  styleUrls: ['./substation-list.component.css']
})
export class SubstationListComponent implements OnInit {
substationList:Substation[];
  constructor(private router:Router,private url:GenerateUrl,private substationService:SubstationService) { }

  ngOnInit() {
this.substationService.getAllSubstation().subscribe(data=>{
console.log(data);
this.substationList=data;
});
  }
add(){
  this.router.navigate(['substation-add']);
}
edit(){
  this.router.navigate(['substation-edit']);
}
}
