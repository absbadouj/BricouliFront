import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Annonce } from '../annonce';
import { AnnonceServiceService } from '../Service/annonce-service.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {
id

  constructor(private annonceservice: AnnonceServiceService, private route: ActivatedRoute, private router: Router) {
  let idannonce = parseInt(this.route.snapshot.paramMap.get('idAnnonce'));
  this.id = idannonce;
    this.annonceservice.GetOneAnnonce(idannonce);


  }

  ngOnInit() {



  }

}
