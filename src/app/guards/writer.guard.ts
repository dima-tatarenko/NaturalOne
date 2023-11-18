import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const writerGuard: CanActivateFn = (route, state) => {

  const router = inject(Router)

  if (localStorage.getItem('writer_token')) {
    return true
  } else {
    router.navigate(['/login'])
    return false
  }
};
