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
export class CommandeserviceService {
apiString:String = "http://localhost:8080"
listDevisachat
listDevisvent
Onedevis

  constructor(private httpClient:HttpClient, private router: Router) { }

   AddDevis(idAnnonce,d){
   this.httpClient.post(this.apiString+'/devis/add/devis/2/'+idAnnonce,d).toPromise().then(data => {
                                                  console.log(d);
                                                  this.router.navigate(['achats/devis']);
                                                  console.log(data);
    });}


    GetDevisClient() : Observable<any[]>{
      this.httpClient.get(this.apiString+'/devis/2')
      .subscribe(data => {
      this.listDevisachat = data;
      console.log("List devis client");
      console.log(data);
      }, (err)=>{
      console.log(err);
      });

      return this.listDevisachat;
          }


    GetDevisseller() : Observable<any[]>{
      this.httpClient.get(this.apiString+'/devis/seller/2')
      .subscribe(data => {
      this.listDevisvent = data;
      console.log("List devis seller");
      console.log(data);
      }, (err)=>{
      console.log(err);
      });
      return this.listDevisvent;
          }


 GetOneDevis(id) : Observable<any[]> {
   this.httpClient.get(this.apiString+'/devis/afficher/'+id)
   .subscribe(data => {
      this.Onedevis = data;
      console.log("Get One Devis");
      console.log(data);
      }, (err)=>{
      console.log(err);
      });
      return this.Onedevis;
      }


RefuserDevis(idDevis,m){
   this.httpClient.post(this.apiString+'/devis/refuser/devis/'+idDevis,m).toPromise().then(data => {
   this.router.navigate(['achats/devis']);
   console.log(data);
    });}


AccepterDevis(iddevis,msg){
   this.httpClient.post(this.apiString+'/devis/accepter/devis/'+iddevis,msg).toPromise().then(data => {
   this.router.navigate(['paiement/'+iddevis]);
   console.log(data);
    });

    }

 EnvoyerDevis(iddevis,mnt){
    this.httpClient.post(this.apiString+'/devis/envoyer/devis/'+iddevis,mnt).toPromise().then(data => {
    this.router.navigate(['paiement/'+iddevis]);
    console.log(data);
    });
    }


AddCommande(iddevis,c){
   this.httpClient.post(this.apiString+'/commande/passer/2/'+iddevis, c).toPromise().then(data => {
                                                  this.router.navigate(['commande']);
                                                  console.log(data);
    });}




}




