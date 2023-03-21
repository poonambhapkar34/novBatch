import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularformsRoutingModule } from './angularforms-routing.module';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { SharedModule } from '../shared/shared.module';

//import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    ReactiveformComponent,
    TemplatedrivenComponent,
   
    
  ],
  imports: [
    CommonModule,
   // BrowserModule,
    AngularformsRoutingModule,
    SharedModule
  ],
  // exports:[
  //   ReactiveformComponent,
  // ]

  //bootstrap: [ReactiveformComponent]
})
export class AngularformsModule { }
