import { Directive, ElementRef, HostListener } from '@angular/core';
console.log('inside directive');

@Directive({
  selector: '[appCharactersonly]'
})
export class CharactersonlyDirective {


  constructor(private elementRef : ElementRef) { console.log('inside directive');}
  
  @HostListener ('input' , ["$event"] ) 
  onInputBoxChange(){
      console.log('CharactersonlyDirective..');
       var inputBoxInitialValue  = this.elementRef.nativeElement.value;
      this.elementRef.nativeElement.value =  inputBoxInitialValue.replace(/[^a-zA-Z]*/g, '')
  }
}
