import {Component, OnInit} from '@angular/core';
import {Personne} from '../models/Personne';
import {Router} from '@angular/router';
import {Patient} from '../models/Patient';
import {Praticien} from '../models/Praticien';
import {Adresse} from "../models/Adresse";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  email: string = '';
  mdp: string = '';
  patients: Array<Patient> = new Array<Patient>();
  praticiens: Array<Praticien> = new Array<Praticien>();

  constructor(private router: Router) {
    /*this.patients.push(new Patient(1, 'Cristiano', 'Ronaldo', 'ronaldo@gmail.com', '12345', 'patient', new Adresse('323 rue des bois blancs', , Lille', 'M'));


    this.praticiens.push(new Praticien(2, 'Paul', 'Pogba', 'pogba@gmail.com', '123456', 'praticien', '10 rue 1, Paris', 'M'));
    this.praticiens.push(new Praticien(2, 'Zlatan', 'Ibrahimovic', 'ibra@gmail.com', '123456', 'praticien', '1 rue 1, Paris', 'M'));*/


    this.patients.push(new Patient(2, 'Lionel', 'Messi', 'messi@gmail.com', '123456', 'patient', new Adresse('324 rue des bois blancs', '75000', 'Paris'), 'M'));

  }

  ngOnInit(): void {
  }

  login () {
    let patient = this.patients.find(user => user.email === this.email && user.mdp === this.mdp);
    let praticien = this.praticiens.find(user => user.email === this.email && user.mdp === this.mdp);

    if (patient) {
      localStorage.setItem('currentUser', JSON.stringify(patient));
      this.router.navigate(['patient']);
    }
    else if (praticien) {
      localStorage.setItem('currentUser', JSON.stringify(praticien));
      this.router.navigate(['praticien']);
    }
  }

}
