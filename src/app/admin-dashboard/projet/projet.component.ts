import { Component } from '@angular/core';
import { IProjet } from '../classes/IProjet';
import { ProjetServiceService } from '../Services/projet-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent {

  projets: IProjet[] = [];
  projet: IProjet = {
    id: 0,
    nom: '',
    budget: 0,
  };

  constructor(private projetService: ProjetServiceService) { }

  ngOnInit() {
    this.getProjets();
  }

  getProjets() {
    this.projetService.getProjets().subscribe(
      projets => this.projets = projets,
      error => console.log(error)
    );
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.projetService.createProjet(this.projet).subscribe(
      response => {
        alert('Project added successfully.');
        this.getProjets();
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

    this.projetService.updateProjet(this.projet).subscribe(
      response => {
        alert('Project updated successfully.');
        this.getProjets();
        this.resetForm(form);
      },
      error => {
        console.error(error);
      }
    );
  }

  deleteProjet(projetId: number) {
    this.projetService.deleteProjet(projetId).subscribe(
      response => {
        this.getProjets();
      },
      error => {
        console.error(error);
      }
    );
  }

  updateProjet(projet: IProjet) {
    this.projet = { ...projet };
    
  }


  resetForm(form: NgForm) {
    form.resetForm();
    this.projet = {
      id: 0,
      nom: '',
      budget: 0,
    };
  }
}
