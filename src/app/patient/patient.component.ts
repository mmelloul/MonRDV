import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Personne} from '../models/Personne';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  currentUser: Personne;
  constructor(private router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit(): void {
  }
  logout() {
    localStorage.setItem('currentUser', null);
    this.router.navigate(['/']);
  }
}
