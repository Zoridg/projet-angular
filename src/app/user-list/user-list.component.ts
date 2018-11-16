import { Component, OnInit, OnDestroy } from '@angular/core';
import {User} from "../models/User.model";
import {Subscription} from "rxjs";
import {UserServices} from "../services/user.services";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {

  private users: User[] = [
    new User('Nathan', 'Bergamini', 'nathan.bergamini@gmail.com', 'Bière')
  ];
  userSubscription: Subscription;

  constructor(private userService: UserServices) { }

  ngOnInit() {
    this.userSubscription = this.userService.userSubject.subscribe(
      (users: User[]) => {
        this.users = users;
      }
    );
    this.userService.emitUsers();
  }

  ngOnDestroy(){
    this.userSubscription.unsubscribe();
  }

}
