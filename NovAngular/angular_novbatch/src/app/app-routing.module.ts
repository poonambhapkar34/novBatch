import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding.component';
import { HomeComponent } from './home/home/home.component';
import { LandingComponent } from './home/landing/landing.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path : 'user', component : UserComponent},
  { path: 'dataBinding', component : DatabindingComponent},
  // { path : '**' , component : PagenotfoundComponent},
  { path : 'homeModule-home', component : HomeComponent},
  { path : 'landing' , component : LandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
