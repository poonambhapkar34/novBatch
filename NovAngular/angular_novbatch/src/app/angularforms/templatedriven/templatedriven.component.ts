import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { CommonApiCallService } from '../common-api-call.service';


@Component({
  selector: 'app-templatedriven',
  templateUrl: './templatedriven.component.html',
  styleUrls: ['./templatedriven.component.scss']
})
export class TemplatedrivenComponent {
  fname! : string;
 // ownerUrl = "http://localhost:3000/owner";
  endPoint = "owner";
  ownerData:any;

  constructor(private dataService: DataService,
    private router: Router,
    private commonApiCallService: CommonApiCallService){

  }

  GetOwnerData(){
   this.commonApiCallService.getApiCall(this.endPoint).subscribe(res=>{
    this.ownerData = res
    console.log('res',res)
  })
}
   

  submit(values:any){ 
    console.log('formValues',values);
    console.log(values.fullName);
    this.dataService.formName = values.fullName;
    //post api call
    
    //redirect 
   this.router.navigateByUrl('/angularFormsModule/loginSuccess')
  }
 
}
