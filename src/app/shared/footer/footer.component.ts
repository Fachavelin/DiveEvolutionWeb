import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavBarItem, SocialMedia } from 'src/app/interfaces/footer';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [``],
})
export class FooterComponent implements OnInit {
  @Input() rutas!: string[];

  public router!: Router;

  public socialMedia!: SocialMedia;
  public phone!: string;
  public copyright!: string;
  public imgData!: any;
  public dive: string = '../../../assets/buzo.png';

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
