import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


const optionRequete = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin':'*',
  })
};

@Injectable({
  providedIn: 'root'
})
export class AnnonceServiceService {
apiString:String = "http://localhost:8080"
listAnnonces
listAnnonceuser


  constructor(private httpClient:HttpClient, private router: Router) {
  this.GetAllAnnonces();
  }

  GetAllAnnonces() : Observable<any[]>{
               this.httpClient.get(this.apiString+'/annonces/afficher')
               .subscribe(data => {
                     this.listAnnonces = data;
                     console.log("List annonce test");
                     console.log(data);
                     }, (err)=>{
                     console.log(err);
                     }
                );
               return this.listAnnonces;

  }

  AddAnnonceService(AnnonceModel,id,file){
  let body = new FormData();
  body.append("file", file);
  body.append("Annonce", AnnonceModel);
  console.log(body);
  console.log(file);
  this.httpClient.post(this.apiString+'/annonces/add/service/'+id,body).toPromise().then(data => {
                                                 console.log(AnnonceModel);
                                                 console.log("eeeeeeeeeeeeeee");
                                                 this.router.navigate(['dashboard/annonces']);
                                                 console.log(data);
   });}

   GetAnnoncesSeller(){
                    this.httpClient.get(this.apiString+'/annonces/Afficher/services/user/2')
                    .subscribe(data => {
                          this.listAnnonceuser = data;
                          console.log("List annonce seller");
                          console.log(data);
                          }, (err)=>{
                          console.log(err);
                          }
                     );
       }





}

