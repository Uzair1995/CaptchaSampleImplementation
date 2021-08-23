import { Component, OnInit } from '@angular/core';
import { createPopper } from '@popperjs/core';


declare var $:any;

@Component({
  selector: 'app-signup-merged-initial-and-account',
  templateUrl: './signup-merged-initial-and-account.component.html',
  styleUrls: ['./signup-merged-initial-and-account.component.css']
})
export class SignupMergedInitialAndAccountComponent implements OnInit {
  info = "ABSDF";
  constructor() { }

  ngOnInit(): void {
  }

  updateInfo (e: any) {
    this.info = e?.target?.name;
    console.log("Name => ", )
  }

}
