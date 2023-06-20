import { Component } from '@angular/core';
import { ILaboratoire } from 'src/app/admin-dashboard/classes/ILaboratoire';
import { NgForm } from '@angular/forms';
import { IEtablissement } from '../classes/IEtablissement';
import { LaboratoiresService } from '../Services/laboratoire-service.service';
import { EtablissementService } from '../Services/EtablissementService';

@Component({
  selector: 'app-laboratoire',
  templateUrl: './laboratoire.component.html',
  styleUrls: ['./laboratoire.component.css']
})
export class LaboratoireComponent {

  etablissements : IEtablissement[]=[];

  laboratoires: ILaboratoire[] = [];
  laboratoire: ILaboratoire = {
    nom: '',
    telephone: '',
    email: '',
    etablissement: {
      id:0,
      nom: ''
    }
  };

  constructor(private laboratoireService: LaboratoiresService, private etablissementService : EtablissementService) { }

  ngOnInit() {
    this.getLaboratoires();
    this.getEtablissements();
  }

  getLaboratoires() {
    this.laboratoireService.getLaboratoires().subscribe(
      laboratoires => this.laboratoires = laboratoires,
      error => console.log(error)
    );
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.laboratoireService.createLaboratoire(this.laboratoire).subscribe(
      response => {
        alert('Laboratoire added successfully.');
        this.getLaboratoires();
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

    this.laboratoireService.updateLaboratoire(this.laboratoire).subscribe(
      response => {
        alert('Laboratoire updated successfully.');
        this.getLaboratoires();
        this.resetForm(form);
      },
      error => {
        console.error(error);
      }
    );
  }

  deleteLaboratoire(laboratoireId: number) {
    this.laboratoireService.deleteLaboratoire(laboratoireId).subscribe(
      response => {
        this.getLaboratoires();
      },
      error => {
        console.error(error);
      }
    );
  }

  updateLaboratoire(laboratoire: ILaboratoire) {
    this.laboratoire = { ...laboratoire };
    
  }


  resetForm(form: NgForm) {
    form.resetForm();
    this.laboratoire = {
      nom: '',
      telephone: '',
      email: '',
      etablissement: {
        id:0,
        nom: ''
      }
    };
  }

  getEtablissements() {
    this.etablissementService.getEtablissements().subscribe(
      etablissements => this.etablissements = etablissements,
      error => console.log(error)
    );
  }
}
