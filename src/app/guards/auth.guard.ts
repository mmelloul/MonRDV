import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor (private _router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log(state.url);
    console.log(next);
    if (!currentUser) {
      this._router.navigate(['/']);
      return false
    }
    switch (state.url) {
      case "/patient": console.log("aaaaaaa");if(currentUser.profil !== "patient") {

        this._router.navigate(['/']);
        return false
      }; break;
      case "/praticien": if(currentUser.profil !== "praticien") {
        this._router.navigate(['/']);
        return false
      }; break;
      default: return false
    }
    return true;
  }
  
}
