import { Component } from '@angular/core';

@Component({
  selector: 'app-templatedriven',
  templateUrl: './templatedriven.component.html',
  styleUrls: ['./templatedriven.component.scss']
})
export class TemplatedrivenComponent {
  submit(values:any){
    console.log('formValues',values);
    
  }
}
