import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {

  userService = inject(UserService)

  newUserForm: FormGroup

  constructor() {
    this.newUserForm = new FormGroup({
      first_name: new FormControl('Dima', []),
      last_name: new FormControl('Tatarenko', []),
      acc_name: new FormControl('dimchik', []),
      email: new FormControl('dima@gmail.com', []),
      password: new FormControl('1234', []),
      password_repeat: new FormControl('1234', []),
      acc_token: new FormControl('potato', []),
    }
    )
  }

  onSubmit() {

    // this.formLogin.value.id = 'otra id';
    // const nuevoObj = { ...this.formLogin.value, id: 'otra id' };

    this.newUserForm.value.id = (this.userService.fetchId()) + 1
    if (this.newUserForm.value.acc_token === 'potato') {
      this.newUserForm.value.acc_level = 'writer'
    } else {
      this.newUserForm.value.acc_level = 'user'
    }
    delete this.newUserForm.value.acc_token
    console.log(this.newUserForm.value)
    this.userService.addUser(this.newUserForm.value)
  }

}
