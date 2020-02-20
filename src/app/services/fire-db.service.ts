import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FireDBService {

  constructor(private db: AngularFireDatabase) { }

  /* Método que carga un usuario a la base de datos de firebase */

  updateUserData(user: any) {
    console.log('user: ', user);
    const path = 'users/' + user.uid;
    const u = {
      email: user.email
    };
    this.db.object(path).update(u).catch(error => console.log(error));
}

getUsers() {
  const path = 'users/';
  return this.db.list(path).snapshotChanges();
}

  /* Método que nos devuelve las noticias del Home */

getNoticiasHome() {
  const path = 'noticias/';
  return this.db.list(path).snapshotChanges();
}

  /* Método que nos devuelve una sola noticia por id*/

getNoticia(key) {
  const path = 'noticias/' + key;
  return this.db.list(path).snapshotChanges();
}

 /* Método que nos devuelve las misiones */

getMisiones() {
  const path = 'misiones/';
  return this.db.list(path).snapshotChanges();
}

  /* Método que devuelve una sola mision por id */

getMision(id) {
  const path = 'misiones/' + id;
  return this.db.list(path).snapshotChanges();
}

  /* Método que nos devuelve la sección de las noticias dependiendo del id de la noticia padre del home. */

getSectionNoticias1() {
  const path = 'sectionNoticias/';
  return this.db.list(path).snapshotChanges();
}

getSectionNoticias2() {
  const path = 'sectionNoticias2/';
  return this.db.list(path).snapshotChanges();
}

getSectionNoticias3() {
  const path = 'sectionNoticias3/';
  return this.db.list(path).snapshotChanges();
}

getSectionNoticias4() {
  const path = 'sectionNoticias4/';
  return this.db.list(path).snapshotChanges();
}

getSectionNoticias5() {
  const path = 'sectionNoticias5/';
  return this.db.list(path).snapshotChanges();
}

  /* Método que nos devuelve el desarrollo de la noticia que tenga su id igual a idd */

getSectionNoticia1(idd) {
  const path = 'sectionNoticias/' + idd;
  return this.db.list(path).snapshotChanges();
}

getSectionNoticia2(idd) {
  const path = 'sectionNoticias2/' + idd;
  return this.db.list(path).snapshotChanges();
}

getSectionNoticia3(idd) {
  const path = 'sectionNoticias3/' + idd;
  return this.db.list(path).snapshotChanges();
}

getSectionNoticia4(idd) {
  const path = 'sectionNoticias4/' + idd;
  return this.db.list(path).snapshotChanges();
}

getSectionNoticia5(idd) {
  const path = 'sectionNoticias5/' + idd;
  return this.db.list(path).snapshotChanges();
}

}
