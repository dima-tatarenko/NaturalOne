import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IUser } from 'src/app/interfaces/iuser';
import { ArticleService } from 'src/app/services/article.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  userService = inject(UserService)

  arrUsers: IUser[] = []

  loginUserForm: FormGroup

  constructor() {
    this.loginUserForm = new FormGroup({
      acc_name: new FormControl('jcrow', []),
      password: new FormControl('1234', []),
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
        } else {
          localStorage.setItem('user_token', 'user')
          console.log(localStorage.getItem('user_token'))
        }

      }
    }


    // this.formLogin.value.id = 'otra id';
    // const nuevoObj = { ...this.formLogin.value, id: 'otra id' };


  }

}
