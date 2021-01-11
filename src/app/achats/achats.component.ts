import { Component, OnInit } from '@angular/core';
import { CommandeserviceService } from '../Service/commandeservice.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-achats',
  templateUrl: './achats.component.html',
  styleUrls: ['./achats.component.css']
})
export class AchatsComponent implements OnInit {

  constructor(private commandeservice: CommandeserviceService, private route: ActivatedRoute) {
    this.commandeservice.GetCommandeClient(2);
}

  ngOnInit() {
  }

}
