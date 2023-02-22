import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SocialMedia } from 'src/app/interfaces/footer';
import { PagesService } from 'src/app/Services/pages.service';
import { SharedService } from 'src/app/Services/shared.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styles: [
    `
      .footer {
        background-color: red;
      }
    `,
  ],
})
export class ContactoComponent implements OnInit {
  public datosContacto!: any;
  public contactoImg!: any;
  public phone!: string;
  public socialMedia!: SocialMedia;

  public cargando: boolean = false;

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
      this.phone = data.phone;
      console.log(data);
    });
    this.pages.cargarImagenesContacto().subscribe((data) => {
      this.contactoImg = data;
    });
  }

  validarCampo(campo: string): boolean | null {
    return (
      this.contactoForm.controls[campo].errors &&
      this.contactoForm.controls[campo].touched
    );
  }

  /* mostrarCapcha() {
    if (!this.contactoForm.valid) {
      return;
    }

    Swal.fire({
      title: 'Por favor confirmanos que eres humano antes de seguir',
      html: '<div id="recaptcha" style="margin-left: 4rem; margin-right: auto;"></div>',
      didOpen: () => {
        grecaptcha.render('recaptcha', {
          sitekey: '6LfdiGgeAAAAAInv3oZS5IF71_mn0vWAb8b79C5c',
        });
      },
      preConfirm: function () {
        if (grecaptcha.getResponse().length === 0) {
          Swal.showValidationMessage(`Por favor completa el campo`);
        }
      },
    }).then(() => {
      if (grecaptcha.getResponse().length > 0) {
        this.enviarEmail();
      }
    });
  }
 */
  enviarEmail(): void {
    if (!this.contactoForm.valid) {
      return;
    }
    this.cargando = true;
    const { nombre, email, telefono, asunto } = this.contactoForm.value;
    this.pages
      .enviarEmail(telefono, email, asunto, nombre)
      .subscribe((resp) => {
        Swal.fire({
          icon: 'success',
          text: `${resp.success}`,
        });
        this.cargando = false;
      });
  }
}
