import { Component, OnInit } from '@angular/core';
import {Praticien} from "../models/Praticien";
import {PraticienService} from "./praticien.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-pratitien',
  templateUrl: './pratitien.component.html',
  styleUrls: ['./pratitien.component.css']
})
export class PratitienComponent implements OnInit {
  praticienForm: Praticien = null;

  praticienModal: Praticien = null;

  constructor(private praticienService: PraticienService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  list(): Array<Praticien> {
    return this.praticienService.findAll();
  }

  remove(id: number) {
    this.praticienService.remove(id);
  }

  edit(id: number) {
    this.router.navigate(['/ajout-praticien-component'], { queryParams: {  id } });

  }


}
