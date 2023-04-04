import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-life-cycle-parent',
  templateUrl: './life-cycle-parent.component.html',
  styleUrls: ['./life-cycle-parent.component.scss']
})
export class LifeCycleParentComponent {
  test = 'pppp';

  constructor(private dataService : DataService){
    console.log('constructor...');
   }
  ngOnInit() {
    console.log('parent ngOnInit.....');
  
  }
setData(){
  this.dataService.subjectData.next('Delhi')
}
  ngOnChanges() {
    // ngOnChanges():Called before ngOnInit() (if the component has bound inputs) 
    //and whenever one or more data-bound input properties change.
    console.log(' parent ngOnChanges....');
  }
  ngDoCheck() {
    console.log('parent ngDocheck  .....');
  }
}
