import { Injectable } from '@angular/core';
import {Patient} from "../models/Patient";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PatientHttpService {

  patients: Array<Patient> = new Array<Patient>();

  constructor(private http: HttpClient) {

    /*this.http.post<Patient>("http://localhost:3000/Patients",new Patient(456, "Excel",2)).subscribe(mat => mat);
    this.http.post<Patient>("http://localhost:3000/Patients",new Patient(789, "Excel Perf",3)).subscribe(mat => mat);
    this.http.post<Patient>("http://localhost:3000/Patients",new Patient(678, "Excel TCD",1)).subscribe(mat => mat);
    this.http.post<Patient>("http://localhost:3000/Patients",new Patient(147, "Excel VBA",4)).subscribe(mat => mat);
*/


    this.load();
  }

  findAll(): Array<Patient> {
    return this.patients;
  }

  find(id: number): Observable<Patient> {
    return this.http.get<Patient>("http://localhost:3000/patients/" + id);
  }

  async findBis(id: number): Promise<Patient> {
    try {
      const patient = await this.http.get<Patient>("http://localhost:3000/patients/" + id).toPromise();

      return patient;
    } catch (e) {
      console.log(e);
    }

    return null;
  }

  create(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>("http://localhost:3000/patients", patient);
  }

  update(patient: Patient): Observable<Patient> {
    return this.http.put<Patient>("http://localhost:3000/Patients/" + patient.id, patient);
  }

  remove(id: number): Observable<void> {
    return this.http.delete<void>("http://localhost:3000/patients/" + id);
  }

  load() {
    this.http.get<Array<Patient>>("http://localhost:3000/patients").subscribe(resp => {
      this.patients = resp;
    }, error => console.log(error));
  }
}
