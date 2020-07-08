import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PratitienComponent } from './pratitien/pratitien.component';
import {HttpClientModule} from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { AjoutPraticienComponent } from './pratitien/ajout-praticien/ajout-praticien.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    PratitienComponent,
    AjoutPraticienComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
