import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { switchMap } from 'rxjs/operators';
import { PagesService } from 'src/app/Services/pages.service';

import { SwiperComponent } from 'swiper/angular';

import SwiperCore, { FreeMode, Navigation, Thumbs, Autoplay } from 'swiper';
SwiperCore.use([FreeMode, Navigation, Thumbs, Autoplay]);

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styles: [],
})
export class TourComponent implements OnInit {
  public thumbsSwiper: any;
  public data!: any;
  public dataImg!: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private ps: PagesService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.ps.cargarDatosTourPorId(id)))
      .subscribe((data) => {
        this.data = data;
        console.log(this.data);
      });
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.ps.cargarImagenesTourPorId(id)))
      .subscribe((data) => {
        this.dataImg = data;
        console.log(this.data);
      });
  }
}
