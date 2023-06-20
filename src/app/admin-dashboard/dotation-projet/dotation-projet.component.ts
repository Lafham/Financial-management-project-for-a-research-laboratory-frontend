import { Component } from '@angular/core';
import { IDotProjet } from '../classes/IDotProjet';
import { DotProjetService } from '../Services/dot-projet.service';
import { MembreService } from '../Services/membre-service.service';
import { NgForm } from '@angular/forms';
import { IMembre } from '../classes/IMembre';
import { IProjet } from '../classes/IProjet';
import { ProjetServiceService } from '../Services/projet-service.service';

@Component({
  selector: 'app-dotation-projet',
  templateUrl: './dotation-projet.component.html',
  styleUrls: ['./dotation-projet.component.css']
})
export class DotationProjetComponent {
  membres: IMembre[]=[];
  projets: IProjet[]=[];
  dotProjets: IDotProjet[] = [];
  dotProjet: IDotProjet = {
    id: {
      membre_id: 0,
      projet_id: 0,
    },
    dotationProjet: 0,
    dateDebut: '',
    dateFin: '',
    responsable: false,
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

  projet: IProjet={
    id: 0,
    nom:'',
    budget: 0,
  }



  constructor(private dotProjetService: DotProjetService, private membreService : MembreService, private projetService : ProjetServiceService) { }

  ngOnInit() {
    this.getDotProjets();
  }
  getProjets(){
    this.projetService.getProjets().subscribe(
      projets => this.projets = projets,
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
  getProjetName(membreId: number): string {
    let projetName: string = '';
  
    this.projetService.getProjetById(membreId).subscribe(
      projet => {
        projetName = projet.nom ; 
      },
      error => {
        console.error(error);
      }
    );
  
    return projetName;
  }


  getDotProjets() {
    this.dotProjetService.getDotProjets().subscribe(
      dotProjets => this.dotProjets = dotProjets,
      error => console.log(error)
    );
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.dotProjetService.createDotProjet(this.dotProjet).subscribe(
      response => {
        alert('Projet Dotation added successfully.');
        this.getDotProjets();
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

    this.dotProjetService.updateDotProjet(this.dotProjet).subscribe(
      response => {
        alert('Projet Dotation updated successfully.');
        this.getDotProjets();
        this.resetForm(form);
      },
      error => {
        console.error(error);
      }
    );
  }

  deleteDotProjet(membreId: number, projetId: number) {
    this.dotProjetService.deleteDotProjet(membreId, projetId).subscribe(
      response => {
        this.getDotProjets();
      },
      error => {
        console.error(error);
      }
    );
  }

  updateDotProjet(dotProjet: IDotProjet) {
    this.dotProjet = { ...dotProjet };

  }


  resetForm(form: NgForm) {
    form.resetForm();
    this.dotProjet = {
      id: {
        membre_id: 0,
        projet_id: 0,
      },
      dotationProjet: 0,
      dateDebut: '',
      dateFin: '',
      responsable: false,

  }
}
}