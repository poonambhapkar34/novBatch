import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { CommonApiCallService } from '../common-api-call.service';
import { HttpClient } from "@angular/common/http";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.scss']
})
export class LoginsuccessComponent {
   userName! :string;
   userData :any;
  // url = "http://localhost:3000/user";
   endPoint = "user";
   hotelDetailsEndPoint ="hotelDetails"
   hotelDetails: any;
   subcsribedData: any;
   matForm!:FormGroup;
   constructor(private dataService : DataService,private http:HttpClient,
    private commonApiCallService: CommonApiCallService,private fb:FormBuilder){

   }

   ngOnInit(){
   
    //getting here formName property
   this.userName = this.dataService.formName;

   this.subcsribedData = this.commonApiCallService.getApiCall(this.hotelDetailsEndPoint).subscribe(respo=>{
       this.hotelDetails = respo;
       console.log('this.hotelDetails',respo);
   });

    this.matFormDef()
   
   }

   matFormDef(){
    this.matForm = this.fb.group({
      name:['',[Validators.required]],
      mobno:['',[Validators.required]],
      pass:['']
    })
   }

   getUserData(){
    this.commonApiCallService.getApiCall(this.endPoint).subscribe(response =>{
      this.userData = response;
      console.log(' response', response);
      
    })
   

    // this.http.get(this.url).subscribe(res=>{
    //   this.userData = res;
    // })
   }

   visiblity(){
    console.log('visss');
    
  }
   ngOnDestroy(){
    this.subcsribedData.unsubscribe(); //to avoid memory leakage problem we should have to unsubscribe
   }
}
