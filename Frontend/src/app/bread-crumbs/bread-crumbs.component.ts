import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bread-crumbs',
  templateUrl: './bread-crumbs.component.html',
  styleUrls: ['./bread-crumbs.component.css']
})
export class BreadCrumbsComponent implements OnInit {

  constructor(private router: Router) {
    router.events.subscribe(e => {
      let route = router.getCurrentNavigation();
      let pathString = route?.extractedUrl?.root?.children["primary"]?.segments[0]?.path;
      let currentRoute = pathString == null ? "" : pathString;
      let allAnchorElements = document.getElementsByTagName("a");
      for (let i = 0; i < allAnchorElements.length; i++) {
        let element = allAnchorElements.item(i);
        let boolCheck = element?.href.includes(currentRoute);
        if (boolCheck && currentRoute != "") {
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
