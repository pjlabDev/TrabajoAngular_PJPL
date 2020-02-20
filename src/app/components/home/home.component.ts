import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { FireDBService } from '../../services/fire-db.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  noticias = [];

  constructor(public db: FireDBService) { }

  ngOnInit() {
    /* Metdodo que nos devuelve las Noticias para la pagina del home */
    this.db.getNoticiasHome().subscribe(snap => {
        this.noticias = [];
        snap.forEach(n => {
          const noticia: any = n.payload.val();
          noticia.key = n.key;
          this.noticias.push(noticia);
          console.log(n);
        });
        console.log('users: ', this.noticias);
      });
  }

}
