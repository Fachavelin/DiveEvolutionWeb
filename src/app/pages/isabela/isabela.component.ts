import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/Services/pages.service';

@Component({
  selector: 'app-isabela',
  templateUrl: './isabela.component.html',
  styles: [],
})
export class IsabelaComponent implements OnInit {
  public backgroundImg: string =
    'https://cdn.pixabay.com/photo/2021/08/25/05/01/boat-6572384_960_720.jpg';
  public data!: any;
  public dataImg!: any;

  public title: string = 'Tours a Isabela';
  public selectedButton: number = 0;

  constructor(private pages: PagesService) {}

  ngOnInit(): void {
    this.pages.cargarDatosToursIb().subscribe((data) => {
      this.data = data;
    });
    this.pages.cargarImagenesToursIb().subscribe((dataImg) => {
      this.dataImg = dataImg;
    });
  }
}
