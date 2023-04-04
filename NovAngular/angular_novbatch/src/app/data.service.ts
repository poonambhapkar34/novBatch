import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data = {
    name: 'poonam',
    age: 30,
    mobNo: 568979999
  };

  carName = 'Jaguar...';
  fruit!: any;

  //alternate way to get or set data to service
  studentName = 'Raj';
  empolyee = {
    name: 'Yogesh',
    age: 30,
    mobNo: 9568979999
  }
  formName!: string;
  cityNameService :any
  subjectData = new Subject<any>();
  constructor() { }

  getStudentName(){
   return this.studentName;
  }

  setStudentName(studentName:string){
   this.studentName = studentName;
  }

   multication(num1:number, num2:number){
     return num1 * num2;
   }
     //tiTle,TITLe,TITLE,titLE
   wordValidator(inputValue:any){
    console.log('..............',inputValue.value);
    let inputdata = inputValue.value?.toLowerCase();
    console.log('inputdata',inputdata);
    let isInclude = inputdata?.includes('title');
    console.log('isInclude',isInclude);
    return isInclude ? {isValid : true} : null;
    
    } 
}
