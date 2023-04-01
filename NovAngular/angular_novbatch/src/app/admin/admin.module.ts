import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminParentComponent } from './admin-parent/admin-parent.component';
import { AdminChild2Component } from './admin-child2/admin-child2.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminParentComponent,
    AdminChild2Component
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
