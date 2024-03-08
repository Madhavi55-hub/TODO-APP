import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneComponent } from './one/one.component';

import { FormpageComponent } from './formpage/formpage.component';
import { Comp1Component } from './comp1/comp1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';

import { LoginComponent } from './login/login.component';
import { ContactManagerComponent } from './contact-manager/contact-manager.component';




const routes: Routes = [
{
  path:'contacts/admin',
  component:ContactManagerComponent

},
{
  path:'contacts/view/:contactId',
  component:ContactusComponent
}
 ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
