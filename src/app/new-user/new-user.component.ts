import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserServices} from "../services/user.services";
import {Route, Router} from "@angular/router";
import {User} from "../models/User.model";

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserServices, private route: Router) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      email: '',
      drinkPreference: ''
    });
  }

  onSubmitForm(){
    const value = this.userForm.value;
    const newUser = new User(
      value['firstName'],
      value['lastName'],
      value['email'],
      value['drinkPreference']
    );
    this.userService.addUser(newUser);
    this.route.navigate(['/users']);
  }
}
