import { Injectable } from '@angular/core';
import { LoginService } from './login-service.service';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ResponsableGardServiceService implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(): boolean {
    if (this.loginService.isLoggedIn() && this.loginService.isResponsable()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}