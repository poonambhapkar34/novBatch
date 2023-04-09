import { Component } from '@angular/core';
import { CommonApiCallService } from '../angularforms/common-api-call.service';

@Component({
  selector: 'app-application-landing',
  templateUrl: './application-landing.component.html',
  styleUrls: ['./application-landing.component.scss']
})
export class ApplicationLandingComponent {

 constructor(private commonApiCallService : CommonApiCallService){}

  deleteById(){
    this.commonApiCallService.deleteApiCall('user',10).subscribe(repo=>{
      
    })
  }
}
