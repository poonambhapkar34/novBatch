import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusdetailsComponent } from './aboutusdetails/aboutusdetails.component';
import { AboutuslandingComponent } from './aboutuslanding/aboutuslanding.component';

const routes: Routes = [
  { path:'', component : AboutuslandingComponent},
  { path: 'aboutUsDetails' , component : AboutusdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutusRoutingModule { }
