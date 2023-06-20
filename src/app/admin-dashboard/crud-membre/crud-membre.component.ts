import { Component } from '@angular/core';
import { ILaboratoire } from '../classes/ILaboratoire';
import { IMembre } from '../classes/IMembre';
import { IUser, Role } from '../classes/IUser';
import { MembreService } from '../Services/membre-service.service';
import { LaboratoiresService } from '../Services/laboratoire-service.service';
import { NgForm } from '@angular/forms';
import { UserServiceService } from '../Services/user-service.service';


@Component({
  selector: 'app-crud-membre',
  templateUrl: './crud-membre.component.html',
  styleUrls: ['./crud-membre.component.css']
})
export class CrudMembreComponent {

  users: IUser[]=[];
  laboratoires: ILaboratoire[] = [];
  membres: IMembre[] = [];

  membre: IMembre = {
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

  constructor(private membreService: MembreService, private laboratoireService: LaboratoiresService, 
    private userService: UserServiceService ) { }

  ngOnInit() {
    this.getMembres();
    this.getLaboratoires();
    this.getUsers();
  }
  getUsers(){
    this.userService.getUsers().subscribe(
      users => this.users = users,
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

  updateMembre(membre: IMembre) {
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
