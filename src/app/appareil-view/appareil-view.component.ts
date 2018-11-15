import {Component, Input, OnInit} from '@angular/core';
import {AppareilService} from "../services/appareil.service";
import {AuthServices} from "../services/auth.services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {
  appareils: any[];
  auth: boolean;
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(() => {
      resolve(date);
    }), 20000
  });

  constructor(private appareilService: AppareilService, private authservice: AuthServices, private router: Router) {

  }

  ngOnInit() {
    this.appareils = this.appareilService.appareils;
    this.auth = this.authservice.isAuth;
  }

  onAllumer() {
    if (confirm('Etes-vous sûr de vouloir allumer tous les appareils ?')) {
      this.appareilService.switchOnAll();
    } else {
      return null;
    }
  }

  onEteindre() {
    this.appareilService.switchOffAll();
  }

  onSignOut(){
    this.authservice.signOut();
    this.router.navigate(['auth']);
  }
}
