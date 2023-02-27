import { Component } from '@angular/core';  // import section : where we add dependency classes

@Component({  //component directive section: metadata about component
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { //main component class : where we write code logic
  title = 'angular_novbatch'; //properties
  myName = 'poonam';
  mySurname : string = 'patil';
  mySurname2? : string; //syntax change 
 // mySurname2 : string;

  constructor(){  // constructor : just normal function but it will triger implicity by compiler
      console.log('inside constuctor..');
  }
  
  test(){
    var xyz = 100;
    this.mySurname2 = 'Jadhav';
  }

  test2(){
    this.test();
  }

}
