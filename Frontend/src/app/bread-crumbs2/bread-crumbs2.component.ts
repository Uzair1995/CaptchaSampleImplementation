import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bread-crumbs2',
  templateUrl: './bread-crumbs2.component.html',
  styleUrls: ['./bread-crumbs2.component.css']
})
export class BreadCrumbs2Component implements OnInit {

  constructor(private router: Router) {
    router.events.subscribe(e => {
      let route = router.getCurrentNavigation();
      let pathString = route?.extractedUrl?.root?.children["primary"]?.segments[0]?.path;
      let currentRoute = pathString == null ? "" : pathString;
      let allAnchorElements = document.getElementsByTagName("a");
      for (let i = 0; i < allAnchorElements.length; i++) {
        let element = allAnchorElements.item(i);
        let boolCheck = element?.href.includes(currentRoute);
        if (boolCheck) {
          element?.parentElement?.classList.add("active");
        }
        else {
          element?.parentElement?.classList.remove("active");
        }
      }
    });
  }

  ngOnInit(): void { }
}
