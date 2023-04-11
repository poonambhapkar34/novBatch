import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularformsRoutingModule } from './angularforms-routing.module';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
//import { BrowserModule } from '@angular/platform-browser';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [
    ReactiveformComponent,
    TemplatedrivenComponent,
    LoginsuccessComponent,
   
    
  ],
  imports: [
    CommonModule,
   // BrowserModule,
    AngularformsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ],
  // exports:[
  //   ReactiveformComponent,
  // ]

  //bootstrap: [ReactiveformComponent]
})
export class AngularformsModule { }
