import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ProyectoAngular';

  constructor(public authService: AuthService,
              private router: Router) { }

  logout() {
  this.authService.logoutUser();
  this.router.navigate(['home']);
  }

}
