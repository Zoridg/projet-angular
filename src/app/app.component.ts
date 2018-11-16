import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppareilService} from "./services/appareil.service";
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(private appareilService: AppareilService) {

  }

  ngOnInit() {

  }

  ngOnDestroy() {

  }
}
