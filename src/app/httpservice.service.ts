import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  // http: any;

  constructor(private http:HttpClient) { }
  displayinter():Observable<any>{
    const headers = { 'content-type': 'application/json'} 
    let url="https://cloudide.co.in/workspace/reactor2/public/traininguser/getuser";
    return this.http.post<any>(url,{headers:headers});
  }
  updateintern(createmodalobj):Observable<any>{
    let url="https://cloudide.co.in/workspace/reactor2/public/traininguser/updateuser";
    return this.http.post<any>(url,createmodalobj);

  }
  createintern(createmodalobj):Observable<any>{
    let url="https://cloudide.co.in/workspace/reactor2/public/traininguser/adduser";
    return this.http.post<any>(url,createmodalobj);
  }
  deleteintern(id:any):Observable<any>{
    let url="https://cloudide.co.in/workspace/reactor2/public/traininguser/deleteuser";
    return this.http.post<any>(url,{id:id});
  }
}
