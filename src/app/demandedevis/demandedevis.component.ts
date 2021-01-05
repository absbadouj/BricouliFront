import { Component, OnInit } from '@angular/core';
import { Devis } from '../devis';

@Component({
  selector: 'app-demandedevis',
  templateUrl: './demandedevis.component.html',
  styleUrls: ['./demandedevis.component.css']
})
export class DemandedevisComponent implements OnInit {
DevisModel = new Devis("","","","",0,"");

  constructor() { }

  ngOnInit() {
  }

}
