import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CommonApiCallService {

  constructor(private http : HttpClient) { }

  getUser(url:any){
  return this.http.get(url);
  }
}
