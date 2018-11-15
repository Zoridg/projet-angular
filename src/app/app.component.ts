import {Component, OnInit} from '@angular/core';
import {AppareilService} from "./services/appareil.service";
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  appareils: any[];
  lastUpdate = new Date();
  secondes: number;
  counterSubscription: Subscription;

  constructor(private appareilService: AppareilService) {

  }

  ngOnInit() {
    this.appareils = this.appareilService.appareils;
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

  ngOnDestroy(){
    this.counterSubscription.unsubscribe();
  }

  onAllumer() {
    if (confirm('Etes-vous sûr de vouloir éteindre tous les appareils ?')) {
      this.appareilService.switchOnAll();
    } else {
      return null;
    }
  }

  onEteindre() {
    this.appareilService.switchOffAll();
  }
}
