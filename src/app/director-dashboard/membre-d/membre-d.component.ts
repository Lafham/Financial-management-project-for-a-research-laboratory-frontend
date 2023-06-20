import { Component } from '@angular/core';
import { IUserD } from '../classes/IUserD';
import { ILaboratoireD } from '../classes/ILaboratoireD';
import { IMembreD} from '../classes/IMembreD';
import { MembreService } from '../Services/membre-service.service';
import { LaboratoiresService } from '../Services/laboratoire-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-membre-d',
  templateUrl: './membre-d.component.html',
  styleUrls: ['./membre-d.component.css']
})
export class MembreDComponent {

  users: IUserD[]=[];
  laboratoires: ILaboratoireD[] = [];
  membres: IMembreD[] = [];

  membre: IMembreD = {
    nom: '',
    prenom: '',
    director: false,
    laboratoire: {
      id: 0,
      nom: ''
    },
    user:{
      id: 0,
      username:'',
      telephone:'',
      email:'', 
       }
  };

  constructor(private membreService: MembreService, private laboratoireService: LaboratoiresService) { }

  ngOnInit() {
    this.getMembres();
    this.getLaboratoires();
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

    this.membreService.createMembre(this.membre).subscribe(
      response => {
        alert('Laboratoire added successfully.');
        this.getMembres();
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

    this.membreService.updateMembre(this.membre).subscribe(
      response => {
        alert('Member updated successfully.');
        this.getMembres();
        this.resetForm(form);
      },
      error => {
        console.error(error);
      }
    );
  }

  deleteMembre(membreId: number) {
    this.membreService.deleteMembre(membreId).subscribe(
      response => {
        this.getMembres();
      },
      error => {
        console.error(error);
      }
    );
  }

  updateMembre(membre: IMembreD) {
    this.membre = { ...membre };
    
  }


  resetForm(form: NgForm) {
    form.resetForm();
    this.membre = {
      nom: '',
      prenom: '',
      director: false,
      laboratoire: {
        id: 0,
        nom: ''
      },
      user:{
        id: 0,
        username:'',
        telephone:'',
        email:'', 
      }
}
}

  getLaboratoires() {
    this.laboratoireService.getLaboratoires().subscribe(
      laboratoires => this.laboratoires = laboratoires,
      error => console.log(error)
    );
  }
}
