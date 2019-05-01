import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GenerateUrl } from 'src/app/model/generate-url.model';
import { SubstationService } from 'src/app/services/substation.service';
import { Substation } from 'src/app/model/substation.model';
import { SubstationZone } from 'src/app/model/substation-zone.model';
import { SessionStorage } from 'src/app/model/session-storage.model';

@Component({
  selector: 'app-substation-list',
  templateUrl: './substation-list.component.html',
  styleUrls: ['./substation-list.component.css']
})
export class SubstationListComponent implements OnInit {
  substationList: SubstationZone[];
  substationCode:any;
  
  constructor(
    private router: Router,
    private url: GenerateUrl,
    private substationService: SubstationService,
    private session: SessionStorage
  ) { }

  ngOnInit() {
    this.getAllSubstation();
  }


  add() {
    this.router.navigate(['substation-add']);
  }

  edit(subZone:SubstationZone) {
     
     this.session.storage = subZone;
     this.router.navigate(['substation-edit']);
  }

  delete(substation: Substation) {
    this.substationService.deleteSubstation(substation).subscribe(data => {
      this.getAllSubstation();
      this.router.navigate(['substation-list'])
    });


  }

  getAllSubstation() {
    this.substationService.getAllSubstation().subscribe(data => {
      console.log(data);
      this.substationList = data;
    });
  }
}
