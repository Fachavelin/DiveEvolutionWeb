import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/Services/pages.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styles: [],
})
export class CursosComponent implements OnInit {
  public btn: string = 'btn-tours';
  public btnSelected: string = 'btn-tours-selected';

  public selected: number = 3;

  public data!: any;
  public dataImg!: any;

  public selectedButton: number = 0;

  constructor(private pages: PagesService) {}

  ngOnInit(): void {
    this.pages.cargarDatosCursos().subscribe((data) => {
      this.data = data;
    });
    this.pages.cargarImagenesCursos().subscribe((data) => {
      this.dataImg = data;
    });
  }

  public cambiarButton(num: number): void {
    this.selectedButton = num;
  }
}
