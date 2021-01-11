import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AccueilComponent } from './accueil/accueil.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { CategorieComponent } from './categorie/categorie.component';
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
import { AjouteAnnonceComponent } from './ajoute-annonce/ajoute-annonce.component';
import { PaiementComponent } from './paiement/paiement.component';
import { DemandedevisComponent } from './demandedevis/demandedevis.component';
import { AchatdevisComponent } from './achatdevis/achatdevis.component';
import { AchatfacturesComponent } from './achatfactures/achatfactures.component';
import { AchatsComponent } from './achats/achats.component';
import { CommandeComponent } from './commande/commande.component';
import { MessageComponent } from './message/message.component';
import { UserserviceService } from './Service/userservice.service';
import { AnnonceServiceService } from './Service/annonce-service.service';
import { PageDevisComponent } from './page-devis/page-devis.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    SigninComponent,
    SignupComponent,
    CategorieComponent,
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
    MescoordonnesComponent,
    AjouteAnnonceComponent,
    PaiementComponent,
    DemandedevisComponent,
    AchatdevisComponent,
    AchatfacturesComponent,
    AchatsComponent,
    CommandeComponent,
    MessageComponent,
    PageDevisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
