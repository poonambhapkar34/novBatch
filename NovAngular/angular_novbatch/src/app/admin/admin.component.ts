import { Component, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  @Input() cityName: any;
  @Input() fruits :any;

  test: any;
  cityFromService : any;

  constructor(public dataService : DataService){
  }

     ngOnInit() {
      this.cityFromService = this.dataService.cityNameService;
      console.log(' this.cityFromService', this.cityFromService);
      
     }
     data(){
      this.cityFromService = this.dataService.cityNameService;
     }
}
