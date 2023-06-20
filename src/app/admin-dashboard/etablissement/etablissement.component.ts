import { Component } from '@angular/core';
import { IEtablissement } from '../classes/IEtablissement';
import { NgForm } from '@angular/forms';
import { EtablissementService } from '../Services/EtablissementService';

@Component({
  selector: 'app-etablissement',
  templateUrl: './etablissement.component.html',
  styleUrls: ['./etablissement.component.css']
})
export class EtablissementComponent {
  etablissements: IEtablissement[] = [];
  etablissement: IEtablissement = {
    nom: '',
    telephone: '',
    adresse: '',
    email: ''
  };

  constructor(private etablissementService: EtablissementService) { }

  ngOnInit() {
    this.getEtablissements();
  }

  getEtablissements() {
    this.etablissementService.getEtablissements().subscribe(
      etablissements => this.etablissements = etablissements,
      error => console.log(error)
    );
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.etablissementService.createEtablissement(this.etablissement).subscribe(
      response => {
        alert('Etablissement added successfully.');
        this.getEtablissements();
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

    this.etablissementService.updateEtablissement(this.etablissement).subscribe(
      response => {
        alert('Etablissement updated successfully.');
        this.getEtablissements();
        this.resetForm(form);
      },
      error => {
        console.error(error);
      }
    );
  }

  deleteEtablissement(etablissementId: number) {
    this.etablissementService.deleteEtablissement(etablissementId).subscribe(
      response => {
        this.getEtablissements();
      },
      error => {
        console.error(error);
      }
    );
  }

  updateEtablissement(etablissement: IEtablissement) {
    this.etablissement = { ...etablissement };
    
  }


  resetForm(form: NgForm) {
    form.resetForm();
    this.etablissement = {
      nom: '',
      telephone: '',
      adresse: '',
      email: ''
    };
  }
}
