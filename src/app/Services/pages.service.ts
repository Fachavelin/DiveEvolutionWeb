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

  /* = '4f1600d3-2489-4ecf-be4e-928c779f2ed3' */
  cargarDatosTourPorId(id: string) {
    const url = `${this._baseUrl}/getToursInfo/${this.lang}/${id}`;

    return this.http.get(url);
  }

  cargarDatosCursoPorId(id: string = '9e88e4c6-51be-446a-ab54-d09907304593') {
    const url = `${this._baseUrl}/getCourseInfo/${this.lang}/${id}`;

    return this.http.get(url);
  }

  cargarImagenesCursoPorId(
    id: string = '4f1600d3-2489-4ecf-be4e-928c779f2ed3'
  ) {
    const url = `${this._baseUrl}/getCourseInfoImg/${id}`;

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

  cargarDatosToursSc() {
    const url = `${this._baseUrl}/getTours/${this.lang}/sc`;

    return this.http.get(url);
  }

  cargarImagenesToursSc() {
    const url = `${this._baseUrl}/getToursImg`;

    return this.http.get(url);
  }

  cargarDatosToursSx() {
    const url = `${this._baseUrl}/getTours/${this.lang}/sx`;

    return this.http.get(url);
  }

  cargarImagenesToursSx() {
    const url = `${this._baseUrl}/getToursImg`;

    return this.http.get(url);
  }

  cargarDatosToursIb() {
    const url = `${this._baseUrl}/getTours/${this.lang}/ib`;

    return this.http.get(url);
  }

  cargarImagenesToursIb() {
    const url = `${this._baseUrl}/getToursImg`;

    return this.http.get(url);
  }
}
