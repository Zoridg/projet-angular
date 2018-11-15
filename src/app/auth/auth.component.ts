import {Component, OnInit} from '@angular/core';
import {AuthServices} from "../services/auth.services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  authstatus: boolean;
  status: string;

  constructor(private authService: AuthServices, private router: Router) {

  }

  ngOnInit() {
    this.authstatus = this.authService.isAuth;
  }

  onSignIn(){
    this.authService.signIn().then(
      () => {
        this.status = 'Connecté !';
        this.authstatus = this.authService.isAuth;
        this.router.navigate(['appareils'])
      }
    );
  }

  onSignOut(){
    this.authService.signOut();
    this.authstatus = this.authService.isAuth;
  }

}
