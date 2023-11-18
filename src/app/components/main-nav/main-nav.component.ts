import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {

  router = inject(Router)
  userService = inject(UserService)

  onLogout() {
    localStorage.clear()
    this.router.navigate(['/home'])
  }

}
