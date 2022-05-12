import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ImgBody, Index } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class PagesService {
  private _baseUrl = 'https://diveevolution-backend.herokuapp.com/api';
  private lang;

  constructor(private http: HttpClient) {
    this.lang = localStorage.getItem('language') || 'es';
  }

  cargarDatosIndex() {
    const url = `${this._baseUrl}/getIndex/${this.lang}`;

    return this.http.get<Index>(url);
  }

  cargarImagenesIndex() {
    const url = `${this._baseUrl}/getIndexImg`;

    return this.http.get<ImgBody>(url);
  }

  cargarDatosNosotros() {
    const url = `${this._baseUrl}/getAbout/${this.lang}`;

    return this.http.get(url);
  }

  cargarImagenesNosotros() {
    const url = `${this._baseUrl}/getAboutImg`;

    return this.http.get(url);
  }

  cargarDatosCursos() {
    const url = `${this._baseUrl}/getCourses/${this.lang}`;

    return this.http.get(url);
  }

  cargarImagenesCursos() {
    const url = `${this._baseUrl}/getCoursesImg`;

    return this.http.get(url);
  }
  cargarDatosContacto() {
    const url = `${this._baseUrl}/getContact/${this.lang}`;

    return this.http.get(url);
  }

  cargarImagenesContacto() {
    const url = `${this._baseUrl}/getContactImg`;

    return this.http.get(url);
  }
}
