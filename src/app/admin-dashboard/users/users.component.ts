import { Component } from '@angular/core';
import { IUser,Role } from '../classes/IUser';
import { NgForm } from '@angular/forms';
import { UserServiceService } from '../Services/user-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {


  users: IUser[] = [];
  user: IUser = {
    username:'',
    email: '',
    telephone:'',
    password: '',
    role: Role.MEMBRE
  };

  roles: string[] = Object.values(Role);

  constructor(private userService: UserServiceService) { }
  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
this.userService.getUsers().subscribe(
  users => 
    this.users = users);
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.userService.createUser(this.user).subscribe(
      response => {
        alert('User added successfully.');
        this.getUsers();
        this.resetForm(form);
      },
      error => {
        console.error(error);
      }
    );
  }


  deleteUser(userId: number) {
    this.userService.getUserById(userId).subscribe(
      user => {
        if (user.role !== Role.ADMIN) {
          this.userService.deleteUser(userId).subscribe(
            response => {
              alert('User deleted successfully.');
              this.getUsers();
            },
            error => {
              console.error(error);
            }
          );
        } else {
          alert('Unable to delete a user with the "admin" role.');
        }
      },
      error => {
        console.error(error);
      }
    );
  }
  

  updateUser(user: IUser) {
    this.user = { ...user };
    
  }



// getUsers(): void {
//   this.userService.getUsers()
//     .subscribe(users => {
//       this.users = users;
//     });
// }

onSubmit_Edit(form: NgForm) {
  if (form.invalid) {
    return;
  }

  if (this.user.role !== Role.ADMIN) {
    this.userService.updateUser(this.user).subscribe(
      response => {
        alert('Utilisateur mis à jour avec succès.');
        this.getUsers();
        this.resetForm(form);
      },
      error => {
        console.error(error);
      }
    );
  } else {
    alert('Impossible de modifier un utilisateur avec un rôle "admin".');
  }
}
resetForm(form: NgForm) {
  form.resetForm();
  this.user = {
    username:'',
    email: '',
    password: '',
    telephone:'',
    role: Role.MEMBRE
}

}

}
