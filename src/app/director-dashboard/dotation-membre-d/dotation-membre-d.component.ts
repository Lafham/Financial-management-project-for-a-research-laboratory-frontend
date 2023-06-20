import { Component } from '@angular/core';
import { IMembreD } from '../classes/IMembreD';
import { IDotationUcaRechD } from '../classes/IDotationUcaRechD';
import { IDotMembreD } from '../classes/IDotMembreD';
import { DotMembreService } from '../Services/dot-membre.service';
import { MembreService } from '../Services/membre-service.service';
import { NgForm } from '@angular/forms';
import { DotationUcaRechServiceService } from '../Services/dotation-uca-rech-service.service';

@Component({
  selector: 'app-dotation-membre-d',
  templateUrl: './dotation-membre-d.component.html',
  styleUrls: ['./dotation-membre-d.component.css']
})
export class DotationMembreDComponent {
  membres: IMembreD[]=[];
  dotations: IDotationUcaRechD[]=[];
  dotMembres: IDotMembreD[] = [];
  dotMembre: IDotMembreD = {
    id: {
      membre_id: 0,
      dot_id: 0,
    },
dotation_Membre: 0,
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

  dotation: IDotationUcaRechD={
    id:0,
    annee: '',
    dotationBase:0,
  }



  constructor(private dotMembreService: DotMembreService, private membreService : MembreService, private dotService : DotationUcaRechServiceService) { }

  ngOnInit() {
    this.getDotMembres();
  }
  getDotations(){
    this.dotService.getDotations().subscribe(
      dotation => this.dotations = dotation,
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

  updateDotMembre(dotMembre: IDotMembreD) {
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