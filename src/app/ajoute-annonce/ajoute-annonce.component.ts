import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Annonce } from '../annonce';


@Component({
  selector: 'app-ajoute-annonce',
  templateUrl: './ajoute-annonce.component.html',
  styleUrls: ['./ajoute-annonce.component.css']
})
export class AjouteAnnonceComponent implements OnInit {
AnnonceModel = new Annonce(0,"description","subtitle","titre",false,"categories","ville","1");

  constructor() { }
  ngOnInit() {

  }

}
