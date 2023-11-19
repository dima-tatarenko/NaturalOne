import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interfaces/iuser';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  userService = inject(UserService)
  router = inject(Router)

  arrUsers: IUser[] = []

  loginUserForm: FormGroup

  constructor() {
    this.loginUserForm = new FormGroup({
      acc_name: new FormControl('', [
        this.userValidator.bind(this)
      ]),
      password: new FormControl('', []),
    }
    )
  }

  ngOnInit() {
    this.arrUsers = this.userService.getAll()
    console.log(this.arrUsers)
  }

  onSubmit() {
    for (let user of this.arrUsers) {
      if (user.acc_name == this.loginUserForm.value.acc_name && user.password === this.loginUserForm.value.password) {
        if (user.acc_level === 'writer') {
          localStorage.setItem('writer_token', 'writer')
          localStorage.setItem('user_token', 'user')
          localStorage.setItem('writer_name', JSON.stringify((user.first_name) + ' ' + (user.last_name)))
          console.log(localStorage.getItem('writer_token'))
          this.router.navigate(['/home'])
        } else {
          localStorage.setItem('user_token', 'user')
          console.log(localStorage.getItem('user_token'))
          this.router.navigate(['/home'])
        }

      }
    }
    // this.formLogin.value.id = 'otra id';
    // const nuevoObj = { ...this.formLogin.value, id: 'otra id' };
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
      this.arrUsers = this.userService.getAll()
      return null
    } else {
      return { uservalidator: true }
    }

  }

  checkError(controlName: string, errorName: string) {
    return this.loginUserForm.get(controlName)?.hasError(errorName) && this.loginUserForm.get(controlName)?.touched
  }

}
