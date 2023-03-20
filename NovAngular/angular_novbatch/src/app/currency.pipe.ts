import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency1'
})
export class CurrencyPipe1 implements PipeTransform {

  transform(value: number): any {
    console.log(value)
    //  if(value){
    //   return value * 100 ;
    //  }
    if (!value) {
      return null;
    }

    return value * 80;
   
  }

}
