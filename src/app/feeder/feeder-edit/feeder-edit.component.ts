import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feeder-edit',
  templateUrl: './feeder-edit.component.html',
  styleUrls: ['./feeder-edit.component.css']
})
export class FeederEditComponent implements OnInit {
  feeder:FormGroup;
  constructor(private formBuilder: FormBuilder,  private router:Router) { }

  ngOnInit() {
    this.feeder = this.formBuilder.group({
      substation:['',[Validators.required]],
      feederName:['',[Validators.required]]
    });
  }
  back(){
    this.router.navigate(['dashboard']);
  }
  reset(){
    this.feeder.reset();
}

}
