import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { CommonApiCallService } from '../common-api-call.service';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent {
  // step 1 import ReactiveFormsModule in module.ts file

  studentDataForm!: FormGroup;
  mySurName!: string;
  cities = ['Mumbai', 'Pune', 'Satara', 'Sangli'];
  showPassword: boolean = false;
  password: any;
  confirmPassword: any;
  isMatched: boolean = false;
  boxValue: any;
  hide:any
  constructor(private formBuilder: FormBuilder,
    private dataService: DataService,
    private commonApiCallService: CommonApiCallService) {
  }

  ngOnInit() {
    this.studentForm();
  }

  studentForm() {
    this.mySurName = 'poonam';
    this.studentDataForm = this.formBuilder.group({
      // name : ['Poonam'],
      name: ['', [Validators.required, Validators.minLength(5)]],
      mobileNo: ['', [Validators.required, Validators.pattern("[0-9]*$"), Validators.maxLength(10)]],
      tnc: [true, [Validators.requiredTrue]],
      lastName: ['', [Validators.required, Validators.pattern("[a-zA-Z]*$")]],
      title: ['', [Validators.required, this.dataService.wordValidator]],
      city: [''],
      password: [''],
      confirmPassword: ['']
    })
  }


  passwordValition(inputPassword: any) {
    console.log('pass', inputPassword.target.value);
    this.password = inputPassword.target.value;
    if (this.password == this.confirmPassword) {
      this.isMatched = false;
    }
    else {
      this.isMatched = true;
    }

  }
  confirmPasswordValition(confirmPass: any) {
    this.confirmPassword = confirmPass.target.value;
    if (this.password == this.confirmPassword) {
      this.isMatched = false;
    }
    else {
      this.isMatched = true;
    }
  }

  submit() {
    let endPoint = "user"
    console.log('form data', this.studentDataForm.value);
    //4
    console.log('mobno', this.studentDataForm.value.mobileNo);
    // let mobileNo = this.studentDataForm.value.mobileNo; {mobNo:mobileNo}
    let data = {
      mobNo: this.studentDataForm.value.mobileNo,
      name: this.studentDataForm.value.name
    }
    this.commonApiCallService.postApiCall(endPoint, this.studentDataForm.value).subscribe(respo => {
    });

    this.commonApiCallService.patchApiCall('admin', data, 2).subscribe(res => { })
  }
  showPasswordFun() {
    this.showPassword = !this.showPassword;
  }
  data(event: any) {
    console.log('event', event.target.value);

  }
  data1(value: any) {
    console.log('value', value)
  }
  data2() {
    console.log('boxValue', this.boxValue);

  }
  patApiCall(){
    let data = {
      mobNo: this.studentDataForm.value.mobileNo,
      name: this.studentDataForm.value.name,
      password:this.studentDataForm.value.password,
      confirmPassword :this.studentDataForm.value.confirmPassword
    }
    this.commonApiCallService.putApiCall('admin',data,2).subscribe(respo=>{})
  }
}
