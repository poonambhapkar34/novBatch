import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CommonApiCallService {
 

  url = "http://localhost:3000/";
  constructor(private http: HttpClient) { }

  getApiCall(endPoint: any) {
    let updateUrl = this.url + endPoint;
    //let updateUrl = this.url + "/" + endPoint;
    console.log('updateUrl', updateUrl);
    return this.http.get(updateUrl);
  }

  postApiCall(endPoint: any, data: any) {
    let updateUrl = this.url + endPoint;
    return this.http.post(updateUrl, data);
  }

  deleteApiCall(endpoint:any, id:number) {
    let url = this.url + endpoint + '/' + id;
    return this.http.delete(url);
  }
  patchApiCall(endpoint: string,data: any,id:number) {
    let url = this.url + endpoint + '/' + id ;
    return this.http.patch(url, data)
  }

}
