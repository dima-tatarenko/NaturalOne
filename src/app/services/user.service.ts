import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  arrUsers: IUser[]

  private userCounter: number = 7

  constructor() {
    this.arrUsers = [
      { id: 1, first_name: 'Jeremy', last_name: 'Crawford', acc_name: 'jcrow', email: 'jcrow@gmail.com', password: '1234', acc_level: 'writer' },


      { id: 2, first_name: 'Michael', last_name: 'Karr', acc_name: 'mkarr', email: 'mkarr@gmail.com', password: '1234', acc_level: 'writer' },
      { id: 3, first_name: 'Andrew', last_name: 'Mullen', acc_name: 'amullen', email: 'amullen@gmail.com', password: '1234', acc_level: 'writer' },
      { id: 4, first_name: 'Michael', last_name: 'Sayre', acc_name: 'msayre', email: 'msayre@gmail.com', password: '1234', acc_level: 'writer' },
      { id: 5, first_name: 'Matthew', last_name: 'Razak', acc_name: 'mrazak', email: 'mrazak@gmail.com', password: '1234', acc_level: 'writer' },
      { id: 6, first_name: 'Daniel', last_name: 'Sloss', acc_name: 'dsloss', email: 'dsloss@gmail.com', password: '1234', acc_level: 'writer' },
      { id: 7, first_name: 'Pepito', last_name: 'de la Pradera', acc_name: 'ppradera', email: 'ppradera@gmail.com', password: '1234', acc_level: 'user' },

    ]
  }

  getAll() {
    return this.arrUsers
  }

  addUser(user: IUser) {
    this.arrUsers.push(user)

    // Check that this doesn't apply on failed registration attempt
    this.userCounter++
    console.log(this.arrUsers)
    console.log(this.userCounter)
  }

  fetchId() {
    return this.userCounter
  }

  isLogged(): boolean { return localStorage.getItem('user_token') ? true : false }
  writerLogged(): boolean { return localStorage.getItem('writer_token') ? true : false }




}
