import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestContactComponent } from './test-contact/test-contact.component';
import { TestHomeComponent } from './test-home/test-home.component';

 const routes: Routes = [
  { path : '', component : TestHomeComponent},
  { path : 'testContact', component : TestContactComponent}
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
