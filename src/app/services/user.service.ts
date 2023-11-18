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

  addUser() {


    // Check that this doesn't apply on failed registration attempt
    this.userCounter++
  }




}
