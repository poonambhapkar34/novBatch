import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent {
  // step 1 import ReactiveFormsModule in module.ts file

  studentDataForm!: FormGroup;
  mySurName!:string;
  cities = ['Mumbai','Pune','Satara','Sangli'];
  showPassword : boolean = false;
  password: any;
  confirmPassword: any;
  isMatched :boolean = false;
  constructor(private formBuilder: FormBuilder,
    private dataService : DataService) {
  }

  ngOnInit(){
    this.studentForm();
  }

  studentForm(){
    this.mySurName = 'poonam';
    this.studentDataForm = this.formBuilder.group({
      // name : ['Poonam'],
      name : ['',[Validators.required,Validators.minLength(5)]],
      mobileNo :['',[Validators.required,Validators.pattern("[0-9]*$"),Validators.maxLength(10)]],
      tnc :[true,[Validators.requiredTrue]],
      lastName:['',[Validators.required,Validators.pattern("[a-zA-Z]*$")]],
      title:['',[Validators.required,this.dataService.wordValidator]],
      city :[''],
      password:[''],
      confirmPassword:['']
    })
  }
   

  passwordValition(inputPassword:any){
    console.log('pass',inputPassword.target.value);
    this.password = inputPassword.target.value;
    if(this.password ==  this.confirmPassword  ){
      this.isMatched = false;
    }
    else{
     this.isMatched = true;
    }
    
  }
  confirmPasswordValition(confirmPass:any){
     this.confirmPassword = confirmPass.target.value;
     if(this.password ==  this.confirmPassword  ){
       this.isMatched = false;
     }
     else{
      this.isMatched = true;
     }
  }

  submit(){
   console.log(this.studentDataForm.value);
  }
  showPasswordFun(){
    this.showPassword = !this.showPassword;
  }


}
