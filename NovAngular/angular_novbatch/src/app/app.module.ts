import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule } from '@angular/forms';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ApplicationLandingComponent } from './application-landing/application-landing.component';
import { HeaderComponent } from './header/header.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormComponent } from './form/form.component';
import { SearchtextPipe } from './searchtext.pipe';
import { SharedModule } from './shared/shared.module';
import { AppLandingComponent } from './app-landing/app-landing.component';
import { LifecyclesHooksComponent } from './lifecycles-hooks/lifecycles-hooks.component';
import { LifeCycleParentComponent } from './life-cycle-parent/life-cycle-parent.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { SubjectOneComponent } from './subject-one/subject-one.component';



@NgModule({
  declarations: [ //compo + dir + pipes
    AppComponent,
    UserComponent,
    DatabindingComponent,
    PagenotfoundComponent,
    ApplicationLandingComponent,
    HeaderComponent,
    DirectivesComponent,
  
    FormComponent,
    SearchtextPipe,
    AppLandingComponent,
    LifecyclesHooksComponent,
    LifeCycleParentComponent,
    SubjectsComponent,
    SubjectOneComponent,
  
   
  ],
  imports: [ //modules
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
   // AngularformsModule
    // HomeModule,
    // ContactusModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
