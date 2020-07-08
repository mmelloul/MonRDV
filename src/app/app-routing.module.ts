import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent} from './login-page/login-page.component';
import {PratitienComponent} from './pratitien/pratitien.component';
import {AjoutPraticienComponent} from './pratitien/ajout-praticien/ajout-praticien.component';
import {PraticienComponent} from './praticien/praticien.component';
import {PatientComponent} from './patient/patient.component';
import {AuthGuard} from './guards/auth.guard';


const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'pratitien', component: PratitienComponent },
  { path: 'ajout-praticien-component', component: AjoutPraticienComponent },
  { path: 'patient', component: PatientComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
