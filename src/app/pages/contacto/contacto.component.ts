import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SocialMedia } from 'src/app/interfaces/footer';
import { PagesService } from 'src/app/Services/pages.service';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styles: [],
})
export class ContactoComponent implements OnInit {
  public datosContacto!: any;
  public socialMedia!: SocialMedia;

  contactoForm = this.fb.group({
    nombre: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    telefono: ['', [Validators.required, Validators.minLength(9)]],
    asunto: ['', [Validators.required]],
  });

  constructor(
    private pages: PagesService,
    private shared: SharedService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.pages.cargarDatosContacto().subscribe((data) => {
      this.datosContacto = data;
    });
    this.shared.cargarDatosFooter().subscribe((data) => {
      this.socialMedia = data.social_media;
    });
  }

  validarCampo(campo: string) {
    return (
      this.contactoForm.controls[campo].errors &&
      this.contactoForm.controls[campo].touched
    );
  }
}
