import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent {
  
  para : any;
  //Note:property para = undefine/false = false ; 
  //property para = value:any data type or true = true
  show :any =23;
 items = [10,20,30,40];
 showStudentData : boolean = true;
  student = [
    {
      name: 'Raj',
      age: 20,
      hobby: 'painting'
    },
    {
      name: 'Rupa',
      age: 20,
      hobby: 'Dancing'
    },
    {
      name: 'Ram',
      age: 20,
      hobby: 'Scketing'
    },
    {
      name: 'Ravi',
      age: 40,
      hobby: 'Swimming'
    },
  ]
  hideDiv(){
    this.show = false;
  }
  showDiv(){
    this.show = true;
  }

  toggle1(){
    this.show = !this.show; //!undefined or !false  = true
   
  }
}
