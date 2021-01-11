import { Component, OnInit } from '@angular/core';
import { CommandeserviceService } from '../Service/commandeservice.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ventes',
  templateUrl: './ventes.component.html',
  styleUrls: ['./ventes.component.css']
})
export class VentesComponent implements OnInit {

  constructor(private commandeservice: CommandeserviceService, private route: ActivatedRoute) {

  this.commandeservice.GetCommandeseller(2);

  }

  ngOnInit() {
  }

}
