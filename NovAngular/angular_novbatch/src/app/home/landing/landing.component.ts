import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  carName!: string;

constructor(private dataService: DataService){

}
  ngOnInit(){
     this.carName =  this.dataService.carName;
  }
}
