import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  inputBoxValue: any;
  inputBoxValue1: any;
  arrayItem = [10, 20, 11, 33, 23323, 555];
  arrayHetroItems = ['sachin',true,1000,50,20,'poonam']
  obj = {
    name: 'pooja',
    age: 20
  };
  test?: string;
  checboxValue: any;
  arrayItemCopy: any = [];

  ngOnInit(){
     this.arrayTest();
  }
  myFunction(value: any) {
    this.inputBoxValue = value;
  }
  myFunction1(data: any) {
    console.log('data', data.target.value);

    // this.inputBoxValue1 = data.value;
  }
  myEvent() {
    console.log('.....');

  }
  checkboxEvent(event: any) {
    console.log(event);

    console.log('event', event.value);
    this.checboxValue = event.target.value;
  }
  checkboxEvent1(data: any) {
    console.log('value', data.value);
  }
  blurEvent() {
    console.log('blur..');

  }
  arrayTest() {
    this.arrayItem.forEach(ele => {
      this.arrayItemCopy.push(ele);
    })
  }
}
