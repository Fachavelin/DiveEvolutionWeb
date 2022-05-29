import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/Services/pages.service';

@Component({
  selector: 'app-san-cristobal',
  templateUrl: './san-cristobal.component.html',
  styles: [],
})
export class SanCristobalComponent implements OnInit {
  public backgroundImg: string =
    'https://res.cloudinary.com/logicielapplab/image/upload/v1653800065/DiveEvolution/Hero/caroline-ebinger-UFQtIKMw7eA-unsplash_1_cueqkf.jpg';
  public data!: any;
  public dataImg!: any;

  public title: string = 'Tours a San Cristobal';
  public selectedButton: number = 0;

  constructor(private pages: PagesService) {}

  ngOnInit(): void {
    this.pages.cargarDatosToursSc().subscribe((data) => {
      this.data = data;
    });
    this.pages.cargarImagenesToursSc().subscribe((dataImg) => {
      this.dataImg = dataImg;
    });
  }
}
