import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data = {
    name:'poonam',
    age: 30,
    mobNo: 568979999
  };

  carName = 'Jaguar...';
  fruit! : any;

  constructor() { }
}
