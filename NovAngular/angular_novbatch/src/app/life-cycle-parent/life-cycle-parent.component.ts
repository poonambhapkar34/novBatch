import { Component } from '@angular/core';

@Component({
  selector: 'app-life-cycle-parent',
  templateUrl: './life-cycle-parent.component.html',
  styleUrls: ['./life-cycle-parent.component.scss']
})
export class LifeCycleParentComponent {
 test='pppp' ;

 ngOnInit(){
  console.log('parent ngOnInit.....');
 }
 
 ngOnChanges(){
  // ngOnChanges():Called before ngOnInit() (if the component has bound inputs) 
  //and whenever one or more data-bound input properties change.
   console.log(' parent ngOnChanges....');
  }
}
