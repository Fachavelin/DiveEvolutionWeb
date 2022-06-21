import { Component, OnInit } from '@angular/core';
import { BodyImg, ImgBody, Item, Section1, Section2 } from 'src/app/interfaces';
import { PagesService } from 'src/app/Services/pages.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styles: [],
})
export class InicioComponent implements OnInit {
  public calidad: string[] = [];
  public precio: string[] = [];
  public section2!: Section2;
  public items!: Item[];
  public title!: string;
  public subtitle!: string;
  public little!: string;
  public button!: string;

  public array: string[] = ['', '', '', ''];

  public backGroundImg: string =
    'https://res.cloudinary.com/logicielapplab/image/upload/v1651954750/DiveEvolution/IndexBody/shark-g2b72e37ba_1920_gfmze3.jpg';
  public calidadImg: string[] = ['', ''];
  public precioImg: string[] = ['', ''];
  public section2Img!: Section2;
  public items_img!: string[];

  constructor(private pages: PagesService) {}

  ngOnInit(): void {
    this.pages.cargarDatosIndex().subscribe((datos) => {
      this.calidad = datos.body.section1.calidad;
      this.precio = datos.body.section1.precio;
      this.section2 = datos?.body?.section2;
      this.items = datos.body.section2.items;
      this.title = datos.body.title;
      this.subtitle = datos.body.subtitle;
      this.little = datos.body.little;
      this.button = datos.body.button;
    });

    this.pages.cargarImagenesIndex().subscribe((datos) => {
      // this.backGroundImg = datos.body_img.backgroud;
      this.calidadImg = datos.body_img.section1.calidad;
      this.precioImg = datos.body_img.section1.precio;
      this.section2Img = datos?.body_img?.section2;
      this.items_img = datos?.body_img?.section2?.items_img!;
    });
  }
}
