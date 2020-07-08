import { Component, OnInit } from '@angular/core';
import {PatientHttpService} from './patient.service';
import {Patient} from '../models/Patient';
import {Adresse} from "../models/Adresse";

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {


  patientForm: Patient = null;

  constructor(private patientService: PatientHttpService) {
  }

  ngOnInit(): void {
  }

  list(): Array<Patient> {
    return this.patientService.findAll();
  }

  add() {
    this.patientForm = new Patient();
  }

  async edit(id: number) {

    try {
      this.patientForm = await this.patientService.findBis(id);


      console.log(this.patientForm);
    } catch (e) {
      console.log(e);
    }


    // this.matiereService.find(id).subscribe(resp => {
    //   this.matiereForm = resp;
    // }, error => console.log(error));
  }

  save() {
      if (this.patientForm.id) {
        this.patientService.update(this.patientForm).subscribe(resp => {
        this.patientService.load()
      }, error => console.log(error));
    } else {
        this.patientService.update(this.patientForm).subscribe(resp => {
          this.patientService.load()
      }, error => console.log(error));
    }

      this.cancel();
  }


  remove(id: number) {

      let reponse = confirm("Etes-vous sûr(e) de vouloir supprimer "+  this.patientForm.nom +" ?");
      if (reponse ) {
        this.patientService.remove(id).subscribe(resp => {
          this.patientService.load()
        }, error => console.log(error));
      }
  }

  cancel() {
    this.patientForm = null;
  }

  full(adresse: Adresse) {
    return adresse.rue + " " + adresse.CP + " " + adresse.ville.toUpperCase();
  }
}
