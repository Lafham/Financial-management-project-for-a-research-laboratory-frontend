import { Injectable } from '@angular/core';
import { LoginService } from './login-service.service';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DirectorGardServiceService implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(): boolean {
    if (this.loginService.isLoggedIn() && this.loginService.isDirector()) {
      return true;
    } else {
      this.router.navigate(['/membre']);
      return false;
    }
  }
}