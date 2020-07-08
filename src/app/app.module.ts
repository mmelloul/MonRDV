import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {FormsModule} from '@angular/forms';
import { PatientComponent } from './patient/patient.component';
import { PraticienComponent } from './praticien/praticien.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    PatientComponent,
    PraticienComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
