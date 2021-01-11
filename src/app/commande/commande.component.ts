import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CommandeserviceService } from '../Service/commandeservice.service';
import { Annonce } from '../annonce';
import { Devis } from '../devis';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
id
  constructor(private commandeservice: CommandeserviceService, private route: ActivatedRoute) {
  let idcommande= parseInt(this.route.snapshot.paramMap.get('idCommande'));
    this.id = idcommande;
    this.commandeservice.GetOnecommande(this.id);
  }

  ngOnInit() {
  }

}
