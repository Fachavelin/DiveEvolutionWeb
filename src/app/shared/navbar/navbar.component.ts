import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NavBar, NavBarItem } from 'src/app/interfaces/navbar';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [],
})
export class NavbarComponent implements OnInit {
  @Input() rutas!: string[];

  public images!: any;

  public abierto: boolean = false;
  public abiertoTours: boolean = false;

  public indice: number = 0;
  public indiceFlag: number = 0;
  public indiceTour: number = 0;

  public icono: string[] = ['fa-solid fa-align-justify', 'fa-solid fa-x'];
  public iconoTour: string[] = [
    'fa-solid fa-angle-down ml-1',
    'fa-solid fa-angle-up ml-1',
  ];

  public abiertoFlags: boolean = false;
  public selectedFlag!: number;
  public flags: string[] = [
    '../../../assets/flags/es.png',
    '../../../assets/flags/en.png',
    '../../../assets/flags/fr.png',
  ];

  public items: NavBarItem[] = [];

  constructor(private shared: SharedService, translate: TranslateService) {
    if (localStorage.getItem('language') === null) {
      localStorage.setItem('language', 'es');
    }
    const lang = localStorage.getItem('language') || 'es';
    translate.setDefaultLang('es');
    translate.use(lang);
  }

  ngOnInit(): void {
    /* this.shared.cargarDatosNavbar().subscribe((data) => {
      this.items = data.navBar.nav_bar_items;
    }); */
    this.shared.cargarImagenesNavbar().subscribe((data) => {
      this.images = data;
    });
    switch (localStorage.getItem('language')) {
      case 'es':
        this.selectedFlag = 0;
        break;
      case 'en':
        this.selectedFlag = 1;
        break;
      case 'fr':
        this.selectedFlag = 2;
        break;

      default:
        break;
    }
  }

  abrir() {
    this.abierto = !this.abierto;
    if (this.abierto) {
      this.indice = 1;
    } else {
      this.indice = 0;
    }
  }

  /*  abrirFlags() {
    this.abiertoFlags = !this.abiertoFlags;
    if (this.abiertoFlags) {
      this.indiceFlag = 1;
    } else {
      this.indiceFlag = 0;
    }
  } */

  selectFlag(pos: number) {
    switch (pos) {
      case 0:
        localStorage.setItem('language', 'es');
        break;
      case 1:
        localStorage.setItem('language', 'en');
        break;
      case 2:
        localStorage.setItem('language', 'fr');
        break;
      default:
        break;
    }
    window.location.reload();
  }

  abrirTours() {
    this.abiertoTours = !this.abiertoTours;
    if (this.abiertoTours) {
      this.indiceTour = 1;
    } else {
      this.indiceTour = 0;
    }
  }
}
