import {Component, OnInit} from '@angular/core';
import {AppareilService} from "./services/appareil.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appareils: any[];
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(() => {
      resolve(date);
    }), 20000
  });

  constructor(private appareilService: AppareilService) {

  }

  ngOnInit() {
    this.appareils = this.appareilService.appareils;
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
