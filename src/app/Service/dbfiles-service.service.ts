import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';


const optionRequete = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin':'*',
  })
};

@Injectable({
  providedIn: 'root'
})
export class DBFilesServiceService {
apiString:String = "http://localhost:8080"
file

  constructor(private httpClient:HttpClient) {}


   AddFileImage(f) : Observable<any[]>{
         let body = new FormData();
         body.append("file", f);
         this.httpClient.post(this.apiString+'/uploadFile',body).toPromise().then(data => {
         console.log("image ajouter");
         this.file = data;
         console.log(data);
         });
         return this.file;
        }


}
