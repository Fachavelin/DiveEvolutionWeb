import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/Services/pages.service';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styles: [],
})
export class NosotrosComponent implements OnInit {
  public data!: any;
  public dataImg!: any;

  constructor(private pages: PagesService) {}

  ngOnInit(): void {
    this.pages.cargarDatosNosotros().subscribe((data) => {
      this.data = data;
    });
    this.pages.cargarImagenesNosotros().subscribe((data) => {
      this.dataImg = data;
    });
  }
}
