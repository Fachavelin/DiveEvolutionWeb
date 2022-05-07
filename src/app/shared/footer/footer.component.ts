import { Component, Input, OnInit } from '@angular/core';
import { NavBarItem, SocialMedia } from 'src/app/interfaces/footer';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
    `
      .whatsappColor {
        background-color: #25d366;
        color: white;
      }
    `,
  ],
})
export class FooterComponent implements OnInit {
  @Input() rutas!: string[];

  public socialMedia!: SocialMedia;
  public phone!: string;
  public copyright!: string;
  public imgData!: any;

  constructor(private shared: SharedService) {
    shared.cargarDatosFooter().subscribe((data) => {
      this.socialMedia = data.social_media;
      this.phone = data.phone;
      this.copyright = data.copyright;
    });

    shared.cargarImagenesFooter().subscribe((data) => {
      this.imgData = data;
    });
  }

  ngOnInit(): void {}
}
