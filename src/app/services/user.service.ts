import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  arrUsers: IUser[]

  private userCounter: number = 1

  constructor() {
    this.arrUsers = [
      { id: 1, first_name: 'Jeremy', last_name: 'Crawford', acc_name: 'jcrow', email: 'jcrow@gmail.com', password: '1234', acc_level: 'writer' }
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
