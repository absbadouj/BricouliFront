import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { CategorieComponent } from './categorie/categorie.component';
import { ServicesComponent } from './services/services.component';
import { CategoryComponent } from './category/category.component';
import { AddannonceComponent } from './addannonce/addannonce.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TboardComponent } from './tboard/tboard.component';
import { AnnoncesComponent } from './annonces/annonces.component';
import { VentesComponent } from './ventes/ventes.component';
import { AjouteAnnonceComponent } from './ajoute-annonce/ajoute-annonce.component';
import { PaiementComponent } from './paiement/paiement.component';
import { DemandedevisComponent } from './demandedevis/demandedevis.component';
import { AchatdevisComponent } from './achatdevis/achatdevis.component';
import { AchatfacturesComponent } from './achatfactures/achatfactures.component';
import { AchatsComponent } from './achats/achats.component';





const routes: Routes = [
       {
       path: 'signin',
       component: SigninComponent
       },

       {
       path: '',
       component: AccueilComponent
       },

       {
       path: 'signup',
       component: SignupComponent
       },

       {
       path: 'annonce/:idAnnonce',
       component: AnnonceComponent
       },

       {
       path: 'add/annonce',
       component: AddannonceComponent
       },

       {
       path: 'dashboard',
       component: DashboardComponent
       },

       {
       path: 'dashboard/:annonces',
       component: DashboardComponent
       },

       {
       path: 'dashboard/:board',
       component: DashboardComponent
       },
       {
       path: 'ventes/portfeuille',
       component: DashboardComponent
       },
       {
       path: 'dashboard/:ventes',
       component: DashboardComponent
       },

       {
       path: 'ventes/factures',
       component: DashboardComponent
       },

       {
       path: 'ventes/devis',
       component: DashboardComponent
       },
       {
       path: 'parametres/mon-profil',
       component: DashboardComponent
       },
       {
       path: 'parametres/retrait',
       component: DashboardComponent
       },
       {
       path: 'parametres/mes-coordonnees',
       component: DashboardComponent
       },
       {
       path: 'ventes/creation-de-service',
       component: AjouteAnnonceComponent
       },
       {
       path: 'devis',
       component: DemandedevisComponent
       },
       {
       path: 'paiement',
       component: PaiementComponent
       },
       {
       path: 'dashboard/achats',
       component: DashboardComponent
       },
       {
       path: 'achats/devis',
       component: DashboardComponent
       },
       {
       path: 'achats/factures',
       component: DashboardComponent
       }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
