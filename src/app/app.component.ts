import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BricouliFront';

  constructor(private router: Router) { }


              ngOnInit(): void { }

     isInscriptionRoute() {
               return this.router.url === '/inscription';
            }

     isConnexionRoute() {
               return this.router.url === '/connexion';
            }

}
