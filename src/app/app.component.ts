import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppareilService} from "./services/appareil.service";
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  lastUpdate = new Date();
  secondes: number;
  counterSubscription: Subscription;

  constructor(private appareilService: AppareilService) {

  }

  ngOnInit() {
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
}
