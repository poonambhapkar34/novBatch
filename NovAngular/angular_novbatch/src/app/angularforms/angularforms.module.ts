import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularformsRoutingModule } from './angularforms-routing.module';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
//import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    ReactiveformComponent,
    TemplatedrivenComponent
  ],
  imports: [
    CommonModule,
   // BrowserModule,
    AngularformsRoutingModule
  ],
  // exports:[
  //   ReactiveformComponent,
  // ]

  //bootstrap: [ReactiveformComponent]
})
export class AngularformsModule { }
