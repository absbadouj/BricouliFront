import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AnnonceServiceService } from '../Service/annonce-service.service';
import { CommandeserviceService } from '../Service/commandeservice.service';
import { Annonce } from '../annonce';
import { Devis } from '../devis';

@Component({
  selector: 'app-demandedevis',
  templateUrl: './demandedevis.component.html',
  styleUrls: ['./demandedevis.component.css']
})
export class DemandedevisComponent implements OnInit {
id
DevisModel = new Devis("","");

  constructor(private annonceservice: AnnonceServiceService, private commandeservice: CommandeserviceService, private route: ActivatedRoute) {
  let idannonce = parseInt(this.route.snapshot.paramMap.get('idAnnonce'));
    this.id = idannonce;
    this.annonceservice.GetOneAnnonce(idannonce);
  }

  ngOnInit() {
  }

  onSubmit(){

      this.commandeservice.AddDevis(this.id,this.DevisModel);
     }

}
