import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { CursosComponent } from './cursos/cursos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { TranslateModule } from '@ngx-translate/core';
import { SanCristobalComponent } from './san-cristobal/san-cristobal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToursComponent } from './tours/tours.component';
import { SantaCruzComponent } from './santa-cruz/santa-cruz.component';
import { IsabelaComponent } from './isabela/isabela.component';
import { TourComponent } from './tour/tour.component';

import { SwiperModule } from 'swiper/angular';
import { RouterModule } from '@angular/router';
import { CursoComponent } from './curso/curso.component';

@NgModule({
  declarations: [
    InicioComponent,
    NosotrosComponent,
    CursosComponent,
    ContactoComponent,
    SanCristobalComponent,
    ToursComponent,
    TourComponent,
    SantaCruzComponent,
    IsabelaComponent,
    CursoComponent,
  ],
  exports: [
    InicioComponent,
    NosotrosComponent,
    CursosComponent,
    ContactoComponent,
    SanCristobalComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    ReactiveFormsModule,
    SwiperModule,
  ],
})
export class PagesModule {}
