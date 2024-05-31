import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  formateur:string = "Amine";
  names : string[] = ["Amine","Romain","Emmy"];
  dispaly(){
    alert("Vous avez cliquer ici...");
  }
  constructor() {}

}
