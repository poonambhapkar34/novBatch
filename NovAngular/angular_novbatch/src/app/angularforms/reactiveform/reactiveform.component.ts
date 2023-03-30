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
  showPassword : boolean = false;
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
      title:['',[Validators.required,this.dataService.wordValidator]]
    })
  }
   

  submit(){
   console.log(this.studentDataForm.value);
  }
  showPasswordFun(){
    this.showPassword = !this.showPassword;
  }


}
