import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public http:HttpClient
  ) { }

  getdataApi(url:string,params:any){
    return this.http.get(environment.apiUrl+url+params)
  };

  postdataApi(url:string, params:any){
    return this.http.post(environment.apiUrl+url, params )
  }

  deletedataApi(url:string, params:any){
    return this.http.delete(environment.apiUrl+url+params)
  }

  putdataApi(url:string, params:any){
    return this.http.put(environment.apiUrl+url, params)
  }

}
