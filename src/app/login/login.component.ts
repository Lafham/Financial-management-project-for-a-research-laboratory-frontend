import { Component } from '@angular/core';
import { LoginService } from '../login-service.service';
import { Route, Router, RouterLink } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private loginService: LoginService, private router : Router){}
  email='';
  password='';
  login(form: NgForm) { 
    if (form.invalid) {
      return;
    } {
    this.loginService.login(this.email, this.password).subscribe(
      (response: any) => {
        this.loginService.handleLoginResponse(response);

        //admin role
        if (this.loginService.isAdmin()) {
          this.router.navigate(['/admin-dashboard']);
        } 
        
        //member role
        else if (this.loginService.isMember()) {
          this.router.navigate(['/membre-dashboard']);
        }

        //director role
        else if (this.loginService.isDirector()) {
          this.router.navigate(['/director-dashboard']);
        }
        else{ // responsable role
          this.router.navigate(['/responsable-dashboard'])
        }
      },
      (error) => {
        console.log(error);
        alert('Your Email or Password incorrect! Try again');
      }
    );
  }
}
}
