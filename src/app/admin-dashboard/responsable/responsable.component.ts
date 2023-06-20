import { Component } from '@angular/core';
import { IResponsable, Genre } from '../classes/IResponsable';
import { NgForm } from '@angular/forms';
import { IUser } from '../classes/IUser';
import { ResponsableServiceService } from '../Services/responsable-service.service';
import { UserServiceService } from '../Services/user-service.service';

@Component({
  selector: 'app-responsable',
  templateUrl: './responsable.component.html',
  styleUrls: ['./responsable.component.css']
})
export class ResponsableComponent {

  users: IUser[]=[];
  responsables: IResponsable[] = [];
  responsable: IResponsable = {
    nom: '',
    prenom: '',
    montant: 0.0,
    date: '',
    genre: Genre.Responsable_Marche,
    user: {
      id: 0,
      username: '',
      email: '',
      telephone: '',
  }
  }

  genres: string[] = Object.values(Genre);


  constructor(private respoService: ResponsableServiceService, private userService: UserServiceService) { }
  
  ngOnInit() {
    this.getResponsables();
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers().subscribe(
      users => this.users = users,
      error => console.log(error)
    );
  }
  getResponsables() {
    this.respoService.getResponsables().subscribe(
      responsables => this.responsables = responsables,
      error => console.log(error)
    );
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.respoService.createResponsable(this.responsable).subscribe(
      response => {
        alert('Responsable added successfully.');
        this.getResponsables();
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

    this.respoService.updateResponsable(this.responsable).subscribe(
      response => {
        alert('Responsable updated successfully.');
        this.getResponsables();
        this.resetForm(form);
      },
      error => {
        console.error(error);
      }
    );
  }

  deleteResponsable(ResponsableId: number) {
    this.respoService.deleteResponsable(ResponsableId).subscribe(
      response => {
        this.getResponsables();
      },
      error => {
        console.error(error);
      }
    );
  }

  updateResponsable(responsable: IResponsable) {
    this.responsable = { ...responsable };
    
  }


  resetForm(form: NgForm) {
    form.resetForm();
    this.responsable = {  
    nom: '',
    prenom:'',
    montant: 0.0,
    date: '',
    genre: Genre.Responsable_Marche,
    user: {
      id: 0,
      username: '',
      email: '',
      telephone: '',
  }
}

  }
}