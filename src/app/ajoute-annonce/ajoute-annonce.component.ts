import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Annonce } from '../annonce';
import { AnnonceServiceService } from '../Service/annonce-service.service';
import { DBFilesServiceService } from '../Service/dbfiles-service.service';



@Component({
  selector: 'app-ajoute-annonce',
  templateUrl: './ajoute-annonce.component.html',
  styleUrls: ['./ajoute-annonce.component.css']
})
export class AjouteAnnonceComponent implements OnInit {
id
apiString:String = "http://localhost:8080";
AnnonceModel = new Annonce(0,"description","subtitle","titre",false,"categories","ville",1);
file: File;
  constructor(private annonceservice: AnnonceServiceService, private dbfilesservice: DBFilesServiceService) { }
  ngOnInit() {

  }

  fileChange(event: any) {

              let reader = new FileReader();
              if(event.target.files && event.target.files.length > 0) {
                this.file = event.target.files[0];
              }
              this.dbfilesservice.AddFileImage(this.file);

  }

  onSubmit(){
    this.id = this.dbfilesservice.file.idfile;
    this.annonceservice.AddAnnonceService(this.AnnonceModel,1,this.id);
   }

}
