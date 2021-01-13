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
Oneannonce


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

  AddAnnonceService(AnnonceModel,idannonceur,idfile) : Observable<any[]>{
  this.httpClient.post(this.apiString+'/annonces/add/'+idfile+'/service/'+idannonceur,AnnonceModel).toPromise().then(data => {
  console.log(AnnonceModel);
  this.Oneannonce = data;
  console.log("eeee");
  this.router.navigate(['dashboard/annonces']);
  console.log(data);});
  return this.Oneannonce;
  }

   GetAnnoncesSeller() : Observable<any[]>{
   this.httpClient.get(this.apiString+'/annonces/Afficher/services/user/1')
   .subscribe(data => {
   this.listAnnonceuser = data;
   console.log("List annonce seller");
   console.log(data);
   }, (err)=>{
   console.log(err);
   });

   return this.listAnnonceuser;
       }

   GetOneAnnonce(id) : Observable<any[]> {
   this.httpClient.get(this.apiString+'/annonces/'+id)
   .subscribe(data => {
      this.Oneannonce = data;
      console.log("Get One annonce");
      console.log(data);
      }, (err)=>{
      console.log(err);
      });

      return this.Oneannonce;



   }





}

