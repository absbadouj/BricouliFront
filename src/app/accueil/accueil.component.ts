import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../Service/userservice.service';
import { AnnonceServiceService } from '../Service/annonce-service.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
 listAnnonces

  constructor(private annonceservice: AnnonceServiceService, private router: Router) {

  }

  ngOnInit() {
   this.annonceservice.GetAllAnnonces().subscribe(data => {
   this.listAnnonces = data;});
    console.log("subcsribtion"+this.listAnnonces)
  }

}
