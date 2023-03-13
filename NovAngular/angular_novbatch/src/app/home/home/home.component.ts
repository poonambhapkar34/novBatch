import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  mobNo!: number;
  ChangedMobNo! :number

  constructor(private dataService : DataService){}

  multiplication(){
    let res = this.dataService.multication(10,30);
    console.log('res',res);
 }

     edit(){
      this.mobNo = this.dataService.empolyee.mobNo;
      this.dataService.empolyee.mobNo = 9999999999;
      this.ChangedMobNo =   this.dataService.empolyee.mobNo ;
     }
}
