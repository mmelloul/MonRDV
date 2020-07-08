import { Component, OnInit } from '@angular/core';
import {Praticien} from "../../models/Praticien";
import {PraticienService} from "../praticien.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-ajout-praticien',
  templateUrl: './ajout-praticien.component.html',
  styleUrls: ['./ajout-praticien.component.css']
})
export class AjoutPraticienComponent implements OnInit {
  praticienForm: Praticien ;


  constructor(private praticienService: PraticienService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    //this.praticienForm = new Praticien();
    this.route.queryParams.subscribe(params => {
      alert(params["id"]);
      this.praticienForm= this.praticienService.find(params["id"]);
      //alert(this.praticienService.find(params["id"].);
    });
  }

  save() {
    if (this.praticienForm.id) {
      this.praticienService.update(this.praticienForm);
    } else {
      this.praticienService.create(this.praticienForm);
    }
    this.router.navigate(['/pratitien']);
  }

  edit(id: number) {
    this.praticienService.find(id).subscribe(resp => {
      this.praticienForm = resp;
    }, error => console.log(error));

  }


}
