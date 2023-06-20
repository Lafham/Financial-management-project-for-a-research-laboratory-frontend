import { Component } from '@angular/core';
import { IDotationUcaRech } from '../classes/IDotationUcaRech';
import { DotationUcaRechServiceService } from '../Services/dotation-uca-rech-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dotation-uca-rech',
  templateUrl: './dotation-uca-rech.component.html',
  styleUrls: ['./dotation-uca-rech.component.css']
})
export class DotationUCARechComponent {
  dotations: IDotationUcaRech[] = [];
  dotation: IDotationUcaRech = {
    annee: '',
    dotationBase: 0.0
  };

  constructor(private dotUcaRechService: DotationUcaRechServiceService) { }

  ngOnInit() {
    this.getDotationsUca();
  }

  getDotationsUca() {
    this.dotUcaRechService.getDotations().subscribe(
      dotations => this.dotations = dotations,
      error => console.log(error)
    );
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.dotUcaRechService.createDotation(this.dotation).subscribe(
      response => {
        alert('Dotation UCA Rech added successfully.');
        this.getDotationsUca();
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

    this.dotUcaRechService.updateDotation(this.dotation).subscribe(
      response => {
        alert('Dotation UCA Rech updated successfully.');
        this.getDotationsUca();
        this.resetForm(form);
      },
      error => {
        console.error(error);
      }
    );
  }

  deleteDotation(dotationId: number) {
    this.dotUcaRechService.deleteDotation(dotationId).subscribe(
      response => {
        this.getDotationsUca();
      },
      error => {
        console.error(error);
      }
    );
  }

  updateDotation(dotation: IDotationUcaRech) {
    this.dotation = { ...dotation };
    
  }


  resetForm(form: NgForm) {
    form.resetForm();
    this.dotation = {
      annee: '',
      dotationBase: 0.0
    };
  }
}
