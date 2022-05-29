import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { switchMap } from 'rxjs/operators';
import { PagesService } from 'src/app/Services/pages.service';

import { SwiperComponent } from 'swiper/angular';

// import Swiper core and required modules
import SwiperCore, { FreeMode, Navigation, Thumbs, Autoplay } from 'swiper';

// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs, Autoplay]);

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styles: [],
})
export class CursoComponent implements OnInit {
  public thumbsSwiper: any;
  public data!: any;
  public dataImg!: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private ps: PagesService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.ps.cargarDatosCursoPorId(id)))
      .subscribe((data) => {
        this.data = data;
        /* console.log(this.data); */
      });
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.ps.cargarImagenesCursoPorId(id)))
      .subscribe((dataImg) => {
        this.dataImg = dataImg;
        /* console.log(this.data); */
      });
  }
}
