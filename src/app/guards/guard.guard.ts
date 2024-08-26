import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const guardGuard: CanActivateFn = (route, state) => {

  let currentUser = JSON.parse(localStorage.getItem('user')!)
  let routed= inject(Router);
  if (!currentUser) {
    routed.navigate(['/home']);
   
  }
  return true;
};
                                            