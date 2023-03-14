import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutuslandingComponent } from './aboutus/aboutuslanding/aboutuslanding.component';
import { ApplicationLandingComponent } from './application-landing/application-landing.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectivesComponent } from './directives/directives.component';
import { HomeComponent } from './home/home/home.component';
import { LandingComponent } from './home/landing/landing.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  //simple routing of globle components
  { path : '' , component :ApplicationLandingComponent},
  { path : 'user', component : UserComponent},
  { path: 'dataBinding', component : DatabindingComponent},
  { path : 'homeModule-home', component : HomeComponent},
  { path : 'landing' , component : LandingComponent},
  //{ path: 'aboutUsLanding', component :AboutuslandingComponent},dont do like this
  { path : 'directives' , component : DirectivesComponent},
  
  //lazy loading concept
  { path : 'home-Module', loadChildren : () => import('./home/home.module').then(mod => mod.HomeModule)},
  { path : 'aboutUs-Module', loadChildren:()=>import('./aboutus/aboutus.module').then(mod => mod.AboutusModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'test' , loadChildren:()=> import('./test/test.module').then(mod => mod.TestModule)  },
 
  { path : '**' , component : PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
