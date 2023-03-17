import { Directive } from '@angular/core';
console.log('inside directive');

@Directive({
  selector: '[appCharactersonly]'
})
export class CharactersonlyDirective {


  constructor() { console.log('inside directive');}
  
}
