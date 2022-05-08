import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ImgBody, Index } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class PagesService {
  private _baseUrl = 'https://dive-evolution.herokuapp.com/api';
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

  cargarDatosContacto() {
    const url = `${this._baseUrl}/getContact/${this.lang}`;

    return this.http.get(url);
  }
}
