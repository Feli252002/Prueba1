import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  user:any;
  viajes:any;
   
  ngOnInit() {
    gsap.from("#animacion1, #animacion2, #animacion3", { x: -200, opacity: 0.5, duration: 1
    });
  }

  constructor(private activatedRoute: ActivatedRoute,
    private router:Router) {
      this.activatedRoute.queryParams.subscribe(params =>{
        if (this.router.getCurrentNavigation()?.extras.state) {
          this.user = this.router.getCurrentNavigation()?.extras.state?.["user"];
          console.log(this.user)
        }else{
          this.router.navigate(["/login"]);
        }
      });

      this.activatedRoute.queryParams.subscribe(params =>{
        if (this.router.getCurrentNavigation()?.extras.state) {
          this.viajes = this.router.getCurrentNavigation()?.extras.state?.["viajes"];
          console.log(this.viajes)
        }else{
          this.router.navigate(["/login"]);
        }
      });
    }

}
