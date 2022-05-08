import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { CursosComponent } from './cursos/cursos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ToursComponent } from './tours/tours.component';
import { TranslateModule } from '@ngx-translate/core';
import { SanCristobalComponent } from './san-cristobal/san-cristobal.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InicioComponent,
    NosotrosComponent,
    CursosComponent,
    ContactoComponent,
    ToursComponent,
    SanCristobalComponent,
  ],
  exports: [
    InicioComponent,
    NosotrosComponent,
    CursosComponent,
    ContactoComponent,
    SanCristobalComponent,
  ],
  imports: [CommonModule, TranslateModule, ReactiveFormsModule],
})
export class PagesModule {}
