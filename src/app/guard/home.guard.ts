import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import LoginService from '../services/LoginService';

@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivate {
  connected;
  constructor(private loginService: LoginService, private router: Router) {
    this.connected = this.loginService.connected.getValue()
    console.log({coucou:this.connected})
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.checkLogin(this.connected);
  }

  checkLogin(islogin: boolean): boolean {
    if (islogin) {
      return true;
    } else {
      this.router.navigate(["/"]);
      return false;
    }
  }
  
}
