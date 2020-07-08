import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent} from './login-page/login-page.component';
import {PratitienComponent} from "./pratitien/pratitien.component";
import {AjoutPraticienComponent} from "./pratitien/ajout-praticien/ajout-praticien.component";


const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'pratitien', component: PratitienComponent },
  { path: 'ajout-praticien-component', component: AjoutPraticienComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
