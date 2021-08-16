import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-details-first-level',
  templateUrl: './personal-details-first-level.component.html',
  styleUrls: ['./personal-details-first-level.component.css']
})
export class PersonalDetailsFirstLevelComponent implements OnInit {
  checkoutForm: any;

  constructor() { }

  ngOnInit(): void {
    this.checkoutForm = new FormGroup({
      rawDataString: new FormControl("", [Validators.required])
    });
  }

  async onSubmit(): Promise<void> {
    console.log(this.checkoutForm.value.rawDataString);
  }

}
