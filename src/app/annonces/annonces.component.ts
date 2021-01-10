import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../Service/userservice.service';
import { AnnonceServiceService } from '../Service/annonce-service.service';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.css']
})
export class AnnoncesComponent implements OnInit {

  constructor(private annonceservice: AnnonceServiceService) {


  }

  ngOnInit() {
    this.annonceservice.GetAnnoncesSeller();

  }

}
