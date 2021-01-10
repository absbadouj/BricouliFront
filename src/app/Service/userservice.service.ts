import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';


const optionRequete = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin':'*',
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
apiString:String = "http://localhost:8080"
listUsers



  constructor(private httpClient:HttpClient) {

  }

  GetAllUsers(){
           this.httpClient.get(this.apiString+'/user/users')
           .subscribe(data => {
                 this.listUsers = data;
                 console.log("List users test");
                 console.log(data);
                 }, (err)=>{
                 console.log(err);
                 }
            );
  }

  GetUserConnexion(){
  this.httpClient.get(this.apiString+'/user/connexion/molay/flan')
  .subscribe(data => {
                   console.log("user connexion");
                   console.log(data);
                   if(data == null) {
                   console.log("no found user");}
                   },
                   (err)=>{
                   console.log(err);
                   }
              );
  }


}
