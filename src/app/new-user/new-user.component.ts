import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {UserServices} from "../services/user.services";
import {Router} from "@angular/router";
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
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      drinkPreference: ['', Validators.required],
      hobbies: this.formBuilder.array([])
    });
  }

  onSubmitForm() {
    const value = this.userForm.value;
    const newUser = new User(
      value['firstName'],
      value['lastName'],
      value['email'],
      value['drinkPreference'],
      value['hobbies'] ? value['hobbies'] : []
    );
    this.userService.addUser(newUser);
    this.route.navigate(['/users']);
  }

  getHobbies(): FormArray {
    return this.userForm.get('hobbies') as FormArray;
  }

  onAddHobby() {
    const newHobbyControl = this.formBuilder.control(null, Validators.required);
    this.getHobbies().push(newHobbyControl);
  }
}
