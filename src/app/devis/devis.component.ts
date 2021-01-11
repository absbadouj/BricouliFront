import { Component, OnInit } from '@angular/core';
import { CommandeserviceService } from '../Service/commandeservice.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.css']
})
export class DevisComponent implements OnInit {

  constructor(private commandeservice: CommandeserviceService, private route: ActivatedRoute) {
   this.commandeservice.GetDevisseller();
  }

  ngOnInit() {

  }

}
