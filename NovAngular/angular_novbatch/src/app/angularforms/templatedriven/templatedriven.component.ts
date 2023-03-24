import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';


@Component({
  selector: 'app-templatedriven',
  templateUrl: './templatedriven.component.html',
  styleUrls: ['./templatedriven.component.scss']
})
export class TemplatedrivenComponent {
  fname! : string;

  constructor(private dataService: DataService,
    private router: Router){

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
