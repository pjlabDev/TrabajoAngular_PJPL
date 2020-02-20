import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  retUrl = 'home';
  dataForm: FormGroup;

  constructor(public authService: AuthService,
              private router: Router,
              private activatedRoute: ActivatedRoute ) {
    /* FormGroup con sus respectivos FormControlName para validar nuestro formulario */
      this.dataForm = new FormGroup({
        correo: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
        pass: new FormControl('', [Validators.required, Validators.minLength(7)])
      });
  }

  ngOnInit() {
    /* Recibimos los parametros de la url */
    this.activatedRoute.queryParamMap
        .subscribe(params => {
          this.retUrl = params.get('retUrl');
          console.log('LoginComponent/ngOnInit ' + this.retUrl);
        });
  }

  /* Login de firebase con email y password */
  login() {
    this.authService.firebaseLogin()
        .then(data => {
          if (this.retUrl != null) {
            this.router.navigate([this.retUrl]);
          } else {
            this.router.navigate(['home']);
          }
        })
        .catch(error => {
          /* SweetAlert */
          Swal.fire({
            title: 'Error!',
            text: 'El usuario introducido contiene valores incorrectos o no existe en nuestra base de datos.',
            icon: 'error',
            confirmButtonText: 'Aceptar',
            preConfirm: () => {
              return this.router.navigate(['login']);
            }
          });
          /* Vaciamos el email, el password y reseteamos el formulario */
          this.authService.email = '';
          this.authService.pass = '';
          this.dataForm.reset();
        });
    }

    /* Metodo que nos registrará un email y un password del usuario que se registre en la pagina de login */
    registrarse() {
      return this.authService.registrarse()
      .catch( error => {
        Swal.fire({
          icon: 'error',
          title: 'Lo sentimos, ha ocurrido un problema',
          text: 'Usuario existente en la base de datos.',
        });
        this.dataForm.reset();
      });
    }

  /* onFormSubmit(loginForm) {
    this.authService.login(loginForm.value.username, loginForm.value.pass)
        .subscribe(data => {
          console.log('return to ' + this.retUrl);
          if (this.retUrl != null) {
            this.router.navigate([this.retUrl]);
          } else {
            this.router.navigate(['home']);
          }
        });
  } */

}
