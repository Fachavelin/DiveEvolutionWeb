import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ImgBody, Index } from '../interfaces';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PagesService {
  private _baseUrl = 'https://diveevolutiongpsbackend.uc.r.appspot.com';
  private _mailBaseUrl =
    'https://mailservicebackend.uc.r.appspot.com/api/standardMail';
  private lang;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
  };

  constructor(private http: HttpClient) {
    this.lang = localStorage.getItem('language') || 'es';
  }

  cargarDatosIndex() {
    const url = `${this._baseUrl}/api/getIndex/${this.lang}`;

    return this.http.get<Index>(url);
  }

  cargarImagenesIndex() {
    const url = `${this._baseUrl}/api/getIndexImg`;

    return this.http.get<ImgBody>(url);
  }

  cargarDatosNosotros() {
    const url = `${this._baseUrl}/api/getAbout/${this.lang}`;

    return this.http.get(url);
  }

  cargarImagenesNosotros() {
    const url = `${this._baseUrl}/api/getAboutImg`;

    return this.http.get(url);
  }

  cargarDatosCursos() {
    const url = `${this._baseUrl}/api/getCourses/${this.lang}`;

    return this.http.get(url);
  }

  cargarImagenesCursos() {
    const url = `${this._baseUrl}/api/getCoursesImg`;

    return this.http.get(url);
  }

  /* = '4f1600d3-2489-4ecf-be4e-928c779f2ed3' */
  cargarDatosTourPorId(id: string) {
    const url = `${this._baseUrl}/api/getToursInfo/${this.lang}/${id}`;

    return this.http.get(url);
  }

  cargarImagenesTourPorId(id: string) {
    const url = `${this._baseUrl}/api/getToursInfoImg/${id}`;

    return this.http.get(url);
  }

  cargarDatosCursoPorId(id: string = '9e88e4c6-51be-446a-ab54-d09907304593') {
    const url = `${this._baseUrl}/api/getCourseInfo/${this.lang}/${id}`;

    return this.http.get(url);
  }

  cargarImagenesCursoPorId(
    id: string = '4f1600d3-2489-4ecf-be4e-928c779f2ed3'
  ) {
    const url = `${this._baseUrl}/api/getCourseInfoImg/${id}`;

    return this.http.get(url);
  }

  cargarDatosContacto() {
    const url = `${this._baseUrl}/api/getContact/${this.lang}`;

    return this.http.get(url);
  }

  cargarImagenesContacto() {
    const url = `${this._baseUrl}/api/getContactImg`;

    return this.http.get(url);
  }

  cargarDatosToursSc() {
    const url = `${this._baseUrl}/api/getTours/${this.lang}/sc`;

    return this.http.get(url);
  }

  cargarImagenesToursSc() {
    const url = `${this._baseUrl}/api/getToursImg`;

    return this.http.get(url);
  }

  cargarDatosToursSx() {
    const url = `${this._baseUrl}/api/getTours/${this.lang}/sx`;

    return this.http.get(url);
  }

  cargarImagenesToursSx() {
    const url = `${this._baseUrl}/api/getToursImg`;

    return this.http.get(url);
  }

  cargarDatosToursIb() {
    const url = `${this._baseUrl}/api/getTours/${this.lang}/ib`;

    return this.http.get(url);
  }

  cargarImagenesToursIb() {
    const url = `${this._baseUrl}/api/getToursImg`;

    return this.http.get(url);
  }

  enviarEmail(phone: string, email: string, message: string, name: string) {
    const url = `${this._mailBaseUrl}/api/sendMail`;
    const clientName = 'Jhonatan Quihuiri';
    const body = {
      phone,
      email,
      message,
      name,
      clientName,
    };

    return this.http.post<any>(url, body, this.httpOptions);
  }
}
