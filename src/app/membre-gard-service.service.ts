import { Injectable } from '@angular/core';
import { LoginService } from './login-service.service';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MembreGardServiceService implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(): boolean {
    if (this.loginService.isLoggedIn() && this.loginService.isMember()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}