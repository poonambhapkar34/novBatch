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
  constructor(public dataService : DataService){
  }

  parentData(event:any) {
   console.log('input value',event.target.value);
   this.parentCityName = event.target.value;
   this.dataService.cityNameService = event.target.value;

  }
}
