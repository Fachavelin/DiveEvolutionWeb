import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/Services/pages.service';

@Component({
  selector: 'app-santa-cruz',
  templateUrl: './santa-cruz.component.html',
  styles: [],
})
export class SantaCruzComponent implements OnInit {
  public backgroundImg: string =
    'https://cdn.pixabay.com/photo/2021/08/25/05/01/boat-6572384_960_720.jpg';
  public data!: any;
  public dataImg!: any;

  public title: string = 'Tours a Santa Cruz';
  public selectedButton: number = 0;

  constructor(private pages: PagesService) {}

  ngOnInit(): void {
    this.pages.cargarDatosToursSx().subscribe((data) => {
      this.data = data;
    });
    this.pages.cargarImagenesToursSx().subscribe((dataImg) => {
      this.dataImg = dataImg;
    });
  }
}
