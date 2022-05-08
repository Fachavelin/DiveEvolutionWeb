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
  public button!: string;

  public array: string[] = ['', '', '', ''];

  public backGroundImg: string = '';
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
      this.button = datos.body.button;
    });

    this.pages.cargarImagenesIndex().subscribe((datos) => {
      this.backGroundImg = datos.body_img.backgroud;
      this.calidadImg = datos.body_img.section1.calidad;
      this.precioImg = datos.body_img.section1.precio;
      this.section2Img = datos?.body_img?.section2;
      this.items_img = datos?.body_img?.section2?.items_img!;
    });
  }
}