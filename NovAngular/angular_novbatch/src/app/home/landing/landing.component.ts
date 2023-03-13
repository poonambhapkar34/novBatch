import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  carName!: string;
  data:any;
  fruit:any;
  studentName!: string;

constructor(private dataService: DataService){

}
  ngOnInit(){
    //get set
     this.carName =  this.dataService.carName; //getting carname proprty's value
     this.dataService.fruit = "Orange"; //setting fruit property's value
  }
  //to fetch data from service
  getData(){
        //get set
   this.data = this.dataService.data;
   this.fruit = this.dataService.fruit;
   console.log('this.fruit ',this.fruit );
  }
  setData(){
    this.dataService.fruit = 12333;
  }

 //aternate way of get and set:dont use this
  getStudentName() {
    this.studentName = this.dataService.getStudentName();
    console.log('studentName', this.studentName);
  }
  setStudentName(){
    let name = 'Priya';
    this.dataService.setStudentName(name);
    console.log(this.dataService.studentName);
  }

  //reusablity of function
  multiplication(){
    let res = this.dataService.multication(20,30);
    console.log('res',res);
    }
}
