import { Component, OnInit } from '@angular/core';
import { CommandeserviceService } from '../Service/commandeservice.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-achatdevis',
  templateUrl: './achatdevis.component.html',
  styleUrls: ['./achatdevis.component.css']
})
export class AchatdevisComponent implements OnInit {

  constructor(private commandeservice: CommandeserviceService, private route: ActivatedRoute) {
  this.commandeservice.GetDevisClient();
  }

  ngOnInit() {
  }

}
