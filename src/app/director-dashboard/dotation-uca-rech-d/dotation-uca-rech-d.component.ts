import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IDotationUcaRechD } from '../classes/IDotationUcaRechD';
import { DotationUcaRechServiceService } from '../Services/dotation-uca-rech-service.service';

@Component({
  selector: 'app-dotation-uca-rech-d',
  templateUrl: './dotation-uca-rech-d.component.html',
  styleUrls: ['./dotation-uca-rech-d.component.css']
})
export class DotationUcaRechDComponent {
  dotations: IDotationUcaRechD[] = [];
  dotation: IDotationUcaRechD = {
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

  updateDotation(dotation: IDotationUcaRechD) {
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
