import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CommandeserviceService } from '../Service/commandeservice.service';
import { AnnonceServiceService } from '../Service/annonce-service.service';
import { Annonce } from '../annonce';
import { Devis } from '../devis';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent implements OnInit {
id


  constructor(private commandeservice: CommandeserviceService, private route: ActivatedRoute) {

     let iddevis = parseInt(this.route.snapshot.paramMap.get('idDevis'));
     this.id = iddevis;
     this.commandeservice.GetOneDevis(iddevis);


     }

  ngOnInit() {

  }

  onCommande(){
        this.commandeservice.AddCommande(this.id,"je le veux");

    }

}
