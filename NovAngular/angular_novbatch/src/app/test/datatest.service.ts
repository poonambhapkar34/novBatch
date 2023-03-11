import { Injectable } from '@angular/core';
import { DataService } from '../data.service';

@Injectable({
  providedIn: 'root'
})
export class DatatestService {

  constructor(public dataService : DataService) { }

  car = this.dataService.carName;
  title = 'My Web Page';
  
  test(){
    return this.title;
  }
}
