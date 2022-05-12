import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Footer } from '../interfaces/footer';
import { Header } from '../interfaces/navbar';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private _baseUrl = 'https://diveevolution-backend.herokuapp.com/api';
  private lang;

  constructor(private http: HttpClient) {
    this.lang = localStorage.getItem('language') || 'es';
  }

  /* cargarDatosNavbar() {
    const url = `${this._baseUrl}/getHeader/${this.lang}`;
    console.log('first');
    return this.http.get<Header>(url);
  } */

  cargarImagenesNavbar() {
    const url = `${this._baseUrl}/getHeaderImg`;

    return this.http.get(url);
  }

  cargarDatosFooter() {
    const url = `${this._baseUrl}/getFooter/${this.lang}`;

    return this.http.get<Footer>(url);
  }

  cargarImagenesFooter() {
    const url = `${this._baseUrl}/getFooterImg`;

    return this.http.get(url);
  }
}
