import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  @Input() cityName: any;
  @Input() fruits :any;
  @Input() table:any;
  @Output() childData = new EventEmitter<any> ()
 
  test: any;
  cityFromService : any;

  constructor(public dataService : DataService){
  }

     ngOnInit() {
      this.cityFromService = this.dataService.cityNameService;
      console.log(' this.cityFromService', this.cityFromService);
      console.log(this.table);
      
      
     }
     data(){
      this.cityFromService = this.dataService.cityNameService;
     }

     favFruit(data:any){
       console.log(data.target.value);
       let value = data.target.value;
       this.childData.emit(value);
     }
}
