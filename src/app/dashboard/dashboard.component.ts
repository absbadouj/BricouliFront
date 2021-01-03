import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

   isAnnoncesRoute() {
             return this.router.url === '/dashboard/annonces';
          }

   isTableauBoardRoute() {
             return this.router.url === '/dashboard/board';
          }
   isVentesRoute() {
             return this.router.url === '/dashboard/ventes';
          }

   isPortfeuilleRoute() {
                return this.router.url === '/ventes/portfeuille';
          }

    isFactureesRoute() {
                return this.router.url === '/ventes/factures';
          }

    isDevisRoute() {
                    return this.router.url === '/ventes/devis';
              }
    isPPublicRoute() {
                    return this.router.url === '/parametres/mon-profil';
              }
    isRetraitRoute() {
                        return this.router.url === '/parametres/retrait';
                  }
    isMescordRoute() {
                            return this.router.url === '/parametres/mes-coordonnees';
                      }
}
