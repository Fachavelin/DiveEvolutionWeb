import { Component } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Dive Evolution';

  public rutas: string[] = [
    '',
    '/nosotros',
    '/san-cristobal',
    '/cursos',
    '/contacto',
  ];

  ngOnInit() {
    AOS.init(/* { once: true } */);
    window.addEventListener('load', AOS.refresh);
  }
}
