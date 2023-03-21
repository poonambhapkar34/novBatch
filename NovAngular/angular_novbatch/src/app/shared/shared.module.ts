import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersonlyDirective } from '../charactersonly.directive';
import { CurrencyPipe1 } from '../currency.pipe';
import { NumbersOnlyDirective } from '../angularforms/numbers-only.directive';



@NgModule({
  declarations: [
    CharactersonlyDirective,
    CurrencyPipe1,
    NumbersOnlyDirective,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CharactersonlyDirective,
    CurrencyPipe1,
    NumbersOnlyDirective
  ]
})
export class SharedModule { }
