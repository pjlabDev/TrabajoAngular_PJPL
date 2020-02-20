import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, UrlTree, RouterStateSnapshot, ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  /* Método propio de CanActivate, si el usuario intenta entrar en una sección no permitida sin antes iniciar sesion
    le aparecerá un SweetAlert (una alerta de error) que si la acepta,
    lo redirigirá al Login. Si se loguea, lo manda a la sección que antes no tenia permitida ver. */

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean
  | UrlTree | import('rxjs').Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const id = route.params.id;
    if (!this.authService.isUserLoggedIn()) {
      Swal.fire({
        title: 'Error!',
        text: 'No tienes permitido entrar en esta sección, antes debes loguearte. Te rederigimos al Login.',
        icon: 'error',
        confirmButtonText: 'Aceptar',
        preConfirm: () => {
          return this.router.navigate(['login'], { queryParams: { retUrl: route.url} });
        }
      });

      return false;

      // var urlTree = this.router.createUrlTree(['login']);
      // return urlTree;
  }

    return true;
  }

}
