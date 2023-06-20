import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IDotProjetD } from '../classes/IDotProjetD';
import { DotProjetService } from '../Services/dot-projet.service';
import { MembreService } from '../Services/membre-service.service';
import { ProjetServiceService } from '../Services/projet-service.service';
import { IProjetD } from '../classes/IProjetD';
import { IMembreD} from '../classes/IMembreD';

@Component({
  selector: 'app-dotation-projet-d',
  templateUrl: './dotation-projet-d.component.html',
  styleUrls: ['./dotation-projet-d.component.css']
})
export class DotationProjetDComponent {

  membres: IMembreD[]=[];
  projets: IProjetD[]=[];
  dotProjets: IDotProjetD[] = [];
  dotProjet: IDotProjetD = {
    id: {
      membre_id: 0,
      projet_id: 0,
    },
    dotationProjet: 0,
    dateDebut: '',
    dateFin: '',
  }
  membre:IMembreD ={
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

  projet: IProjetD={
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

  updateDotProjet(dotProjet: IDotProjetD) {
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

  }
}
}