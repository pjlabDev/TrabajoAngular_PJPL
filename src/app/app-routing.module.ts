import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ContactComponent } from './components/contact/contact.component';
import { AuthGuardService } from './services/auth-guard.service';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { DesarrolloNoticiasComponent } from './components/desarrollo-noticias/desarrollo-noticias.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'noticia/:id', component: NoticiasComponent},
  { path: 'login', component: LoginComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'noticias', component: NoticiasComponent, canActivate: [AuthGuardService]},
  { path: 'desarrollo/:id/:idd', component: DesarrolloNoticiasComponent},
  { path: 'desarrollo/:id', component: DesarrolloNoticiasComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
