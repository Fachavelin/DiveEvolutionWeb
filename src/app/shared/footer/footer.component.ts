import { Component, OnInit } from '@angular/core';
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
  public datoNavbar: NavBarItem[] = [];
  public socialMedia!: SocialMedia;
  public phone!: string;
  public copyright!: string;

  constructor(private shared: SharedService) {
    shared.cargarDatosFooter().subscribe((data) => {
      this.datoNavbar = data.navBar.nav_bar_items;
      this.socialMedia = data.social_media;
      this.phone = data.phone;
      this.copyright = data.copyright;
    });
  }

  ngOnInit(): void {}
}
