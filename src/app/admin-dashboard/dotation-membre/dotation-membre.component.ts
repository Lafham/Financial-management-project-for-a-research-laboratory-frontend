import { Component } from '@angular/core';
import { DotProjetService } from '../Services/dot-projet.service';
import { MembreService } from '../Services/membre-service.service';
import { NgForm } from '@angular/forms';
import { IMembre } from '../classes/IMembre';
import { IProjet } from '../classes/IProjet';
import { ProjetServiceService } from '../Services/projet-service.service';
import { IDotationUcaRech } from '../classes/IDotationUcaRech';
import { IDotMembre } from '../classes/IDotMembre';
import { DotMembreService } from '../Services/dot-membre.service';
import { DotationUcaRechServiceService } from '../Services/dotation-uca-rech-service.service';

@Component({
  selector: 'app-dotation-memrbe',
  templateUrl: './dotation-membre.component.html',
  styleUrls: ['./dotation-membre.component.css']
})
export class DotationMembreComponent {
  membres: IMembre[]=[];
  dotations: IDotationUcaRech[]=[];
  dotMembres: IDotMembre[] = [];
  dotMembre: IDotMembre = {
    id: {
      membre_id: 0,
      dot_id: 0,
    },
dotation_Membre: 0,
  }

  membre:IMembre ={
    nom:'',
    prenom:'',
    director: false,
    laboratoire: {
        id: 0,
        nom:'',
    },
    user: {
        id: 0,
        username:'',
        email:'',
        telephone:'',
    }
  }

  dotation: IDotationUcaRech={
    id:0,
    annee: '',
    dotationBase:0,
  }



  constructor(private dotMembreService: DotMembreService, private membreService : MembreService, private dotService : DotationUcaRechServiceService) { }

  ngOnInit() {
    this.getDotMembres();
    this.getMembres();
    this.getDotations();
  }
  getMembres(){
    this.membreService.getMembres().subscribe(
      membres => this.membres = membres,
      error => console.log(error)
    );
  }

  getDotations(){
    this.dotService.getDotations().subscribe(
      dotations => this.dotations = dotations,
      error => console.log(error)
    );
  }
  getMembreName(membreId: number): string {
    let membreFullName: string = '';
  
    this.membreService.getMembreById(membreId).subscribe(
      membre => {
        membreFullName = `${membre.nom} ${membre.prenom}`; 
      },
      error => {
        console.error(error);
      }
    );
  
    return membreFullName;
  }
  getDotationPrix(membreId: number): number {
    let dotPrix: number = 0;
  
    this.dotService.getDotationById(membreId).subscribe(
      dotation => {
        dotPrix = dotation.dotationBase ; 
      },
      error => {
        console.error(error);
      }
    );
  
    return dotPrix;
  }

  getDotMembres() {
    this.dotMembreService.getDotMembres().subscribe(
      dotMembres => this.dotMembres = dotMembres,
      error => console.log(error)
    );
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.dotMembreService.createDotMembre(this.dotMembre).subscribe(
      response => {
        alert('Membre Dotation added successfully.');
        this.getDotMembres();
        this.resetForm(form);
      },
      error => {
        console.error(error);
      }
    );
  }

  onSubmit_Edit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.dotMembreService.updateDotMembre(this.dotMembre).subscribe(
      response => {
        alert('Membre Dotation updated successfully.');
        this.getDotMembres();
        this.resetForm(form);
      },
      error => {
        console.error(error);
      }
    );
  }

  deleteDotMembre(membreId: number, dotID: number) {
    this.dotMembreService.deleteDotMembre(membreId, dotID).subscribe(
      response => {
        this.getDotMembres();
      },
      error => {
        console.error(error);
      }
    );
  }

  updateDotMembre(dotMembre: IDotMembre) {
    this.dotMembre = { ...dotMembre };

  }


  resetForm(form: NgForm) {
    form.resetForm();
    this.dotMembre = {
      id: {
        membre_id: 0,
        dot_id: 0,
      },
  dotation_Membre: 0,

  }
}
}