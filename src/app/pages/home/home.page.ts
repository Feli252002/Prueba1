import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  user: any;

  constructor(public activatedRoute: ActivatedRoute,
    private router: Router) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.user = this.router.getCurrentNavigation()?.extras.state?.["user"];
      } else {
        this.router.navigate(["/login"]);
      }
    });
  }

  segmentChanged($event: any) {
    console.log($event);
    let direccion = $event.detail.value;
    this.router.navigate(['home/' + direccion])
  }
}
