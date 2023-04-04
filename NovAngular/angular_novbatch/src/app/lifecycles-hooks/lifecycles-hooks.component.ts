import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lifecycles-hooks',
  templateUrl: './lifecycles-hooks.component.html',
  styleUrls: ['./lifecycles-hooks.component.scss']
})
export class LifecyclesHooksComponent {
  @Input() parentData: any;
  //8 lF hooks :ngOnChanges,ngOnInit,ngDoCheck,
  //ngAfterContentInit,ngAfterContentChecked,
  //ngAfterViewInit,AfterViwChecked,OnDestroy.
 constructor(){
  console.log('constructor...');
 }
  ngOnChanges() {
    // ngOnChanges():Called before ngOnInit() (if the component has bound inputs) 
    //and whenever one or more data-bound input properties change.
    console.log('ngOnChanges child....');
  }

  ngOnInit() {
    console.log('ngOnInit  child.....');
    console.log("parentData", this.parentData);
  }

  ngDoCheck() {
    console.log('ngDocheck  child.....');
  }
  ngAfterContentInit(){

    console.log('aftercontentInit  child.....');
  }
  ngAfterContentChecked(){
    console.log('aftercontentchecked  child.....');
  }
  ngAfterViewInit(){
    console.log('afterviewInit child...');
   }
   ngAfterViewChecked(){
    console.log('ngAfterViewChecked child...');
   }
   ngOnDestroy(){
    console.log('ngOndestroy child...');
   }
}
