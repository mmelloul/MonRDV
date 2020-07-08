import {Time} from "@angular/common";
import {Patient} from "./Patient";
import {Praticien} from "./Praticien";

export class Rendezvous
{
  patient: Patient;
  praticien: Praticien;
  dateRV: Date;
  heureRV: Time;
  duree: number;

}
