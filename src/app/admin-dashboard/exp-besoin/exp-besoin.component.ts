
import { Component } from '@angular/core';
import { IExpBesoin } from '../classes/IExpBesoin';
import { IMembre } from '../classes/IMembre';
import { IResponsable, Genre } from '../classes/IResponsable';
import { ITypeBesoin } from '../classes/ITypeBesoin';
import { MembreService } from '../Services/membre-service.service';
import { ExpBesoinServiceService } from '../Services/exp-besoin-service.service';
import { TypeBesoinService } from '../Services/type-besoin.service';
import { ResponsableServiceService } from '../Services/responsable-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-exp-besoin',
  templateUrl: './exp-besoin.component.html',
  styleUrls: ['./exp-besoin.component.css']
})
export class ExpBesoinComponent {
  besoins: IExpBesoin[]=[];
  responsables: IResponsable[] = [];
  membres: IMembre[] = [];
  types: ITypeBesoin[]=[];
  besoin: IExpBesoin = {
    montantApproximatif: 0.0,
    besoin : '',
    valide:false,
    dateDemande: '',
    dateValidation: '',
    membre:{
        id:0,
        nom: '',
        prenom:'',
    },
    responsable: {
        id: 0,
        nom: '',
        genre: Genre.Affaire_Finance,
    } ,
    typeBesoin:{
        id:0,
        type:'',
    }
  };

  genres: string[] = Object.values(Genre);


  constructor(private membreService: MembreService, private besoinService: ExpBesoinServiceService,
              private typeService: TypeBesoinService, private respoService: ResponsableServiceService) { }

  ngOnInit() {
    this.getMembres();
    this.getBesoins();
    this.getResponsable();
    this.getTypes();
  }
  getBesoins(){
    this.besoinService.getBesoins().subscribe(
      besoins =>{ this.besoins = besoins;
      console.log(besoins)},
      error => console.log(error)
    );
  }
  getTypes(){
    this.typeService.getTypes().subscribe(
      types =>{ this.types = types;
      console.log(types)},
      error => console.log(error)
    );
  }
getResponsable(){
  this.respoService.getResponsables().subscribe(
    responsables =>{ this.responsables = responsables;
    console.log(responsables)},
    error => console.log(error)
  );
}
  getMembres() {
    this.membreService.getMembres().subscribe(
      membres =>{ this.membres = membres;
      console.log(membres)},
      error => console.log(error)
    );
  }

  onSubmit1(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.besoinService.createBesoin(this.besoin).subscribe(
      response => {
        alert('Besoin added successfully.');
        this.getBesoins();
        this.resetForm(form);
      },
      error => {
        console.error(error);
      }
    );
  }

  onSubmit_Edit1(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.besoinService.updateBesoin(this.besoin).subscribe(
      response => {
        alert('Besoin updated successfully.');
        this.getBesoins();
        this.resetForm(form);
      },
      error => {
        console.error(error);
      }
    );
  }

  deleteBesoin(besoinId: number) {
    this.besoinService.deleteBesoin(besoinId).subscribe(
      response => {
        this.getBesoins();
      },
      error => {
        console.error(error);
      }
    );
  }

  updateBesoin(besoin: IExpBesoin) {
    this.besoin = { ...besoin };
    
  }


  resetForm(form: NgForm) {
    form.resetForm();
    this.besoin = {
      montantApproximatif: 0.0,
      besoin: '',
      valide:false,
      dateDemande: '',
      dateValidation: '',
      membre:{
          id:0,
          nom: '',
          prenom:'',
      },
      responsable: {
          id: 0,
          nom: '',
      } ,
      typeBesoin:{
          id:0,
          type:'',
      }
}
}

}
