import {Component, OnInit, Input} from '@angular/core';
import {AppareilService} from "../services/appareil.service";

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
  @Input() appareilName: string;
  @Input() appareilStatus: string = 'éteint';
  @Input() index: number;

  constructor(private appareilService: AppareilService) {

  }

  ngOnInit() {
  }

  getColor() {
    if (this.appareilStatus == 'éteint') {
      return 'red';
    }
    else {
      return 'blue';
    }
  }

  onSwitch() {
    if (this.appareilStatus == 'allumé') {
      this.appareilService.switchOffOne(this.index);
    } else if (this.appareilStatus == 'éteint') {
      this.appareilService.switchOnOne(this.index);
    }
  }
}
