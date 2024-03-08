import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import { PageComponent } from './page/page.component';

import { TimerComponent } from './timer/timer.component';
import { EveryngsComponent } from './everyngs/everyngs.component';
import { PasswordhideComponent } from './passwordhide/passwordhide.component';
import { CalendershownComponent } from './calendershown/calendershown.component';
import {CalendarModule} from '@syncfusion/ej2-angular-calendars';
import { Parent1Component } from './parent1/parent1.component';
import { Child1Component } from './child1/child1.component';
import { UserComponent } from './user/user.component';
import { MessageService } from './message.service';
import { OthermessageService } from './othermessage.service';
import { HttpClientModule } from '@angular/common/http';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { NumlistService } from './numlist.service';
import { FormpageComponent } from './formpage/formpage.component';
import { ImportComponent } from './import/import.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

import { OtpComponent } from './otp/otp.component';
import{AutofocusDirectiveDirective} from './autofocus-directive.directive';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveComponent } from './reactive/reactive.component';
import { ArraypageComponent } from './arraypage/arraypage.component';
import { FormarrComponent } from './formarr/formarr.component';
import { NewrowsdynamicComponent } from './newrowsdynamic/newrowsdynamic.component';
import { DesignComponent } from './design/design.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { WeatherComponent } from './weather/weather.component';
import { ContactManagerComponent } from './contact-manager/contact-manager.component';
import { TodolistComponent } from './todolist/todolist.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
 
    PageComponent,
    TimerComponent,
    EveryngsComponent,
    PasswordhideComponent,
    CalendershownComponent,
    Parent1Component,
    Child1Component,
    UserComponent,
    Comp1Component,
    Comp2Component,
    FormpageComponent,
    ImportComponent,
    FileUploadComponent,
  OtpComponent,
AutofocusDirectiveDirective,
DashboardComponent,
AboutusComponent,
LoginComponent,
ContactusComponent,
ReactiveComponent,
ArraypageComponent,
FormarrComponent,
NewrowsdynamicComponent,
DesignComponent,
WeatherComponent,
ContactManagerComponent,
TodolistComponent,

],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CalendarModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule
],
  providers: [MessageService,OthermessageService,NumlistService, provideAnimationsAsync() ],
  bootstrap: [AppComponent]
})
export class AppModule { }
