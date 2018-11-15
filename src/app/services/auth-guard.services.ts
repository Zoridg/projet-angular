import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router} from "@angular/router";
import {Observable} from "rxjs";
import {AuthServices} from "./auth.services";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthGuardServices implements CanActivate {

  constructor(private authservices: AuthServices, private router: Router) {

  }

  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.authservices.isAuth){
      return true;
    } else {
      this.router.navigate(['/auth']);
    }
  }
}
