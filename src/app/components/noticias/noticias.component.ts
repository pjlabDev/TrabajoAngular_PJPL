import { Component, OnInit } from '@angular/core';
import { FireDBService } from '../../services/fire-db.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {

  noticia = [];
  misiones = [];
  sectionNoticias = [];
  key: string;

  constructor(public route: ActivatedRoute, public router: Router, public db: FireDBService) { }

  ngOnInit() {
    /* Recogemos el id de la url que estamos mandando */
    this.route.paramMap.subscribe(response => {
      this.key = response.get('id');

    /* Metodo que nos devuelve las misiones de la pagina misiones, es esencial tenerlo fuera de los if, ya que las
        misiones pertenecen a una sección distinta a las noticias del home */

      this.db.getMisiones().subscribe(snap => {
        this.misiones = [];
        snap.forEach(n => {
          const newss: any = n.payload.val();
          this.misiones.push(newss);
        });
        console.log('weeyeyeyeyeyeye', this.misiones);
      });

    /* Dependiendo del id que recojamos, haremos un método que nos devuelva la sección de noticias de dicho id,
      que a su vez ese id es de las noticias del home */

      if (this.key === '1') {
        this.db.getSectionNoticias1().subscribe(snap => {
          this.noticia = [];
          snap.forEach(n => {
            const news: any = n.payload.val();
            this.noticia.push(news);
          });
        });
      } else if (this.key === '2') {
        this.db.getSectionNoticias2().subscribe(snap => {
          this.noticia = [];
          snap.forEach(n => {
            const news: any = n.payload.val();
            this.noticia.push(news);
          });
        });
      } else if (this.key === '3') {
        this.db.getSectionNoticias3().subscribe(snap => {
          this.noticia = [];
          snap.forEach(n => {
            const news: any = n.payload.val();
            this.noticia.push(news);
          });
        });
      } else if (this.key === '4') {
        this.db.getSectionNoticias4().subscribe(snap => {
          this.noticia = [];
          snap.forEach(n => {
            const news: any = n.payload.val();
            this.noticia.push(news);
          });
        });
      } else if (this.key === '5') {
        this.db.getSectionNoticias5().subscribe(snap => {
          this.noticia = [];
          snap.forEach(n => {
            const news: any = n.payload.val();
            this.noticia.push(news);
          });
        });
      } else {
        console.log('ERROR');
      }
    });

  }
}
