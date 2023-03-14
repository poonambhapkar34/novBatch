import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent {
  
  para : any;//para = undefine/false = false
  show :any =23;

  hideDiv(){
    this.show = false;
  }
  showDiv(){
    this.show = true;
  }
  toggle1(){
    this.show = !this.show; //!undefined or !false  = true
   
  }
}
