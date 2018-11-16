import {User} from "../models/User.model";
import {Subject} from "rxjs";

export class UserServices {

  private users: User[];
  userSubject = new Subject<User[]>();

  emitUsers(){
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User){
    this.users.push(user);
    this.emitUsers();
  }
}
