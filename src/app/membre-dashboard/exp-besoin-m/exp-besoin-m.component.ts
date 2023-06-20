import { Component } from '@angular/core';
import { IExpBesoinM } from '../Classes/IExpBesoinM';
import { Genre, IResponsableM } from '../Classes/IResponsableM';
import { IMembreM } from '../Classes/IMembreM';
import { ITypeBesoinM } from '../Classes/ITypeBesoinM';
import { MembreServiceMService } from '../Services/membre-service-m.service';
import { TypeBesoinMService } from '../Services/type-besoin-m.service';
import { ExpBesoinMService } from '../Services/exp-besoin-m.service';
import { ResponsableMService } from '../Services/responsable-m.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-exp-besoin-m',
  templateUrl: './exp-besoin-m.component.html',
  styleUrls: ['./exp-besoin-m.component.css']
})
export class ExpBesoinMComponent {

  besoins: IExpBesoinM[]=[];
  responsables: IResponsableM[] = [];
  membres: IMembreM[] = [];
  types: ITypeBesoinM[]=[];
  besoin: IExpBesoinM = {
    montantApproximatif: 0.0,
    besoin : '',
    valide: false,
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


  constructor(private membreService: MembreServiceMService, private besoinService: ExpBesoinMService,
              private typeService: TypeBesoinMService, private respoService: ResponsableMService) { }

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

  onSubmit(form: NgForm) {
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
        alert('an error of adding');
        console.error(error);
      }
    );
  }

  onSubmit_Edit(form: NgForm) {
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

  updateBesoin(besoin: IExpBesoinM) {
    this.besoin = { ...besoin };
    
  }
  validateNeed(need: IExpBesoinM) {
    need.valide = true;
    this.besoinService.updateBesoin(need).subscribe(
      response => {
        // Handle success
        console.log('Need validated successfully.');
      },
      error => {
        // Handle error
        console.error(error);
      }
    );
  }
  

  resetForm(form: NgForm) {
    form.resetForm();
    this.besoin = {
      montantApproximatif: 0.0,
      besoin: '',
      dateDemande: '',
      valide:false,
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
