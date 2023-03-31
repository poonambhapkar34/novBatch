import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.scss']
})
export class LoginsuccessComponent {
   userName! :string;
   constructor(private dataService : DataService){

   }

   ngOnInit(){
    //getting here formName property
   this.userName = this.dataService.formName;
   }
}
