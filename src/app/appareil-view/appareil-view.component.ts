import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppareilService} from "../services/appareil.service";
import {AuthServices} from "../services/auth.services";
import {Router} from "@angular/router";
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit, OnDestroy {

  appareils: any[];
  appareilSubscription: Subscription;
  auth: boolean;
  secondes: number;

  lastUpdate = new Date();
  private counterSubscription: Subscription;

  constructor(private appareilService: AppareilService, private authservice: AuthServices, private router: Router) {}

  ngOnInit() {
    this.appareilSubscription = this.appareilService.appareilsSubject.subscribe(
      (appareils: any[]) => {
        this.appareils = appareils;
      }
    );
    this.appareilService.emitAppareilSubject();
    this.auth = this.authservice.isAuth;
    const counter = interval(1000);
    this.counterSubscription = counter.subscribe(
      (value) => {
        this.secondes = value;
      },
      (error) => {
        console.log('An error occured! : ' + error);
      },
      () => {
        console.log('Observable complete !');
      });
  }

  ngOnDestroy() {
    this.appareilSubscription.unsubscribe();
  }

  onAllumer() {
    this.appareilService.switchOnAll();
  }

  onEteindre() {
    this.appareilService.switchOffAll();
  }

  onSignOut() {
    this.authservice.signOut();
    this.router.navigate(['auth']);
  }
}
