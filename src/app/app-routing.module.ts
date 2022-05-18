import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { IsabelaComponent } from './pages/isabela/isabela.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { SanCristobalComponent } from './pages/san-cristobal/san-cristobal.component';
import { SantaCruzComponent } from './pages/santa-cruz/santa-cruz.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'san-cristobal', component: SanCristobalComponent },
  { path: 'santa-cruz', component: SantaCruzComponent },
  { path: 'isabela', component: IsabelaComponent },
  { path: 'contacto', component: ContactoComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
