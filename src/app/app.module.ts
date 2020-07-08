import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HttpClientModule} from "@angular/common/http";
import { FormsModule} from '@angular/forms';
import { CommonModule} from "@angular/common";
import { PatientComponent} from "./patient/patient.component";
import {AjoutPraticienComponent} from "./pratitien/ajout-praticien/ajout-praticien.component";
import {PratitienComponent} from "./pratitien/pratitien.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    AjoutPraticienComponent,
    PratitienComponent,
    PatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
