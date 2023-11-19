import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interfaces/iuser';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {

  arrUsers: IUser[] = []

  router = inject(Router)
  userService = inject(UserService)

  newUserForm: FormGroup

  constructor() {

    this.newUserForm = new FormGroup({

      first_name: new FormControl('', [
        Validators.required, Validators.minLength(2), Validators.maxLength(15)
      ]),
      last_name: new FormControl('', [
        Validators.required, Validators.minLength(2), Validators.maxLength(15)
      ]),
      acc_name: new FormControl('', [
        Validators.required, Validators.minLength(4), Validators.maxLength(15), this.userValidator.bind(this),
      ]),
      email: new FormControl('', [
        Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
      ]),
      password: new FormControl('', []),
      password_repeat: new FormControl('', []),
      acc_token: new FormControl(null, []),
    }
    )
  }

  ngOnInit() {
    this.arrUsers = this.userService.getAll()
    console.log(this.arrUsers)
  }

  checkError(controlName: string, errorName: string) {
    return this.newUserForm.get(controlName)?.hasError(errorName) && this.newUserForm.get(controlName)?.touched
  }

  userValidator(control: AbstractControl) {
    const value = control.value

    let userExists = false

    for (let user of this.arrUsers) {
      if (user.acc_name === value) {
        userExists = true
        break
      }
    }

    if (userExists) {
      return { uservalidator: true }
    } else {
      this.arrUsers = this.userService.getAll()
      return null
    }

  }

  onSubmit() {

    // this.formLogin.value.id = 'otra id';

    this.newUserForm.value.id = (this.userService.fetchId()) + 1
    if (this.newUserForm.value.acc_token === 'potato') {
      this.newUserForm.value.acc_level = 'writer'
    } else {
      this.newUserForm.value.acc_level = 'user'
    }
    delete this.newUserForm.value.acc_token
    console.log(this.newUserForm.value)
    this.userService.addUser(this.newUserForm.value)

    this.router.navigate(['/login'])
  }

}
