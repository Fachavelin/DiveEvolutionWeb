import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { CursosComponent } from './cursos/cursos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ToursComponent } from './tours/tours.component';

@NgModule({
  declarations: [
    InicioComponent,
    NosotrosComponent,
    CursosComponent,
    ContactoComponent,
    ToursComponent,
  ],
  exports: [
    InicioComponent,
    NosotrosComponent,
    CursosComponent,
    ContactoComponent,
  ],
  imports: [CommonModule],
})
export class PagesModule {}
