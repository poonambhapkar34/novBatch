import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
    title:string = 'my web page';
    todayDate= '10-12-2023';
    today = new Date();
    todayDate2: any
    inputBoxValue :any;
    amountInDoller = 200;
    test! : number
   employee = [
    {name:'Raj', age:40, salary : 40000},
    {name:'Ravi', age:50, salary : 50000},
    {name:'Shankar', age:40, salary : 40000}
   ]
 

   ngOnInit(){
    this.dateForamte()
   }
   dateForamte(){
    let day = this.today.getDate();
    let month = this.today.getMonth() + 1;
    let year = this.today.getFullYear();
    console.log(day);
    console.log( month);
    console.log( year);
    console.log( day + '-' + month + '-'+ year);
    this.todayDate2 = day + '-' + month + '-'+ year;
    console.log(this.today.toLocaleDateString());
   }
}
