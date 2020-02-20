import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FireDBService } from '../../services/fire-db.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-desarrollo-noticias',
  templateUrl: './desarrollo-noticias.component.html',
  styleUrls: ['./desarrollo-noticias.component.scss']
})
export class DesarrolloNoticiasComponent implements OnInit {

  mision = [];
  noticia = [];
  key: string;
  key2: string;

  constructor(public route: ActivatedRoute, public router: Router, public db: FireDBService) { }

  ngOnInit() {
    /* Recogemos el/los id de la url que estamos mandando */
    this.route.paramMap.subscribe(response => {
      this.key = response.get('id');
      this.key2 = response.get('idd');

      /* Dependiendo el id que recojamos nos sacará las secciones de las noticias que contienen las noticias del home
      o bien nos aparecerán las misiones que podemos ver al loguearnos. */

      if (this.key === '1' && this.key2 !== null) {
        this.db.getSectionNoticia1(this.key2).subscribe(snap => {
          this.noticia = [];
          snap.forEach(n => {
            const news: any = n.payload.val();
            this.noticia.push(news);
          });
        });
      } else if (this.key === '2' && this.key2 != null) {
        this.db.getSectionNoticia2(this.key2).subscribe(snap => {
          this.noticia = [];
          snap.forEach(n => {
            const news: any = n.payload.val();
            this.noticia.push(news);
          });
        });
      } else if (this.key === '3' && this.key2 != null) {
        this.db.getSectionNoticia3(this.key2).subscribe(snap => {
          this.noticia = [];
          snap.forEach(n => {
            const news: any = n.payload.val();
            this.noticia.push(news);
          });
        });
      } else if (this.key === '4' && this.key2 != null) {
        this.db.getSectionNoticia4(this.key2).subscribe(snap => {
          this.noticia = [];
          snap.forEach(n => {
            const news: any = n.payload.val();
            this.noticia.push(news);
          });
        });
      } else if (this.key === '5' && this.key2 != null) {
        this.db.getSectionNoticia5(this.key2).subscribe(snap => {
          this.noticia = [];
          snap.forEach(n => {
            const news: any = n.payload.val();
            this.noticia.push(news);
          });
        });
      } else if (this.key2 == null) {
        /* Si la url no dispone de un segundo id que alojamos en this.key2, nos aparecerán las misiones en vez de las noticias */
        this.db.getMisiones().subscribe(snap => {
          this.mision = [];
          snap.forEach(n => {
            if (this.key === n.key) {
              const newss: any = n.payload.val();
              this.mision.push(newss);
            }
          });
        });
      }

    });

  }

}
