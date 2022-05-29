import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styles: [],
})
export class ToursComponent implements OnInit {
  @Input() backgroundImg: string = '';
  @Input() data!: any;
  @Input() dataImg!: any;
  @Input() title: string = '';
  @Input() btn: string = 'btn-tours';
  @Input() btnSelected: string = 'btn-tours-selected';

  public link = '/tours/';
  public selectedButton: number = 0;
  constructor() {}

  ngOnInit(): void {}

  public cambiarButton(num: number): void {
    this.selectedButton = num;
  }
}
