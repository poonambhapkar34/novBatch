import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-admin-parent',
  templateUrl: './admin-parent.component.html',
  styleUrls: ['./admin-parent.component.scss']
})
export class AdminParentComponent {
  parentCityName : any;
  fruit = ['apple','kiwi','waterMeloc','banana'];
  cars = ['BMW','Audi','Jaguar','Marcedeez','Swift'];
  obj={
    HolderName: 'poonam',
    age: 30,
    mobno: 89898989
  }
  parentTable = [
    {
      name: 'poonam',
      age: 30,
      mobno: 89898989
    },
    {
      name: 'poonam1',
      age: 40,
      mobno: 89898989
    },
    {
      name: 'poonam2',
      age: 20,
      mobno: 89898989
    },
    {
      name: 'poonam4',
      age: 30,
      mobno: 89898989
    }
  ]
  dataFromChild: any;
  constructor(public dataService : DataService){
  }

  parentData(event:any) {
   console.log('input value',event.target.value);
   this.parentCityName = event.target.value;
   this.dataService.cityNameService = event.target.value;

  }
  getChildData(value:any){
   this.dataFromChild = value;
  }
}
