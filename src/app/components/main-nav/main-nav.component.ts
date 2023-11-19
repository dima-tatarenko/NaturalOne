import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {

  router = inject(Router)
  userService = inject(UserService)

  async onLogout() {
    const result = await Swal.fire({
      title: "Do you want to log out?",
      text: "Your local storage will be cleared!",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    })
    if (result.isConfirmed) {
      localStorage.clear()
      this.router.navigate(['/home'])
    }
  }


  // async onClickLogout() {
  //   const result = await Swal.fire({
  //     title: "Do you want to log out?",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes",
  //     cancelButtonText: "No",
  //   })
  //   if (result.isConfirmed) {
  //     localStorage.removeItem('auth_token')
  //     this.router.navigate(['/login'])
  //   }
}
