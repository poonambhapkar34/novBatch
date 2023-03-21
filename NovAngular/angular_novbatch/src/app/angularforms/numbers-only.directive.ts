import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumbersOnly]'
})
export class NumbersOnlyDirective {

  constructor(private elementRef : ElementRef) {}
  
  @HostListener ('input' , ["$event"] ) 
  onInputBoxChange(){
      console.log('numbers-onlyDirective..');
       var inputBoxInitialValue  = this.elementRef.nativeElement.value;
      this.elementRef.nativeElement.value =  inputBoxInitialValue.replace(/[^0-9]*/g, '')
  }

}
