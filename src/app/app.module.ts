import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
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
import { PortfeuilleComponent } from './portfeuille/portfeuille.component';
import { FacturesComponent } from './factures/factures.component';
import { DevisComponent } from './devis/devis.component';
import { MonprofilpublicComponent } from './monprofilpublic/monprofilpublic.component';
import { RetraitComponent } from './retrait/retrait.component';
import { MescoordonnesComponent } from './mescoordonnes/mescoordonnes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    SigninComponent,
    SignupComponent,
    CategorieComponent,
    ServicesComponent,
    CategoryComponent,
    AddannonceComponent,
    AnnonceComponent,
    DashboardComponent,
    TboardComponent,
    AnnoncesComponent,
    VentesComponent,
    PortfeuilleComponent,
    FacturesComponent,
    DevisComponent,
    MonprofilpublicComponent,
    RetraitComponent,
    MescoordonnesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
