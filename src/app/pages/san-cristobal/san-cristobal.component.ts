import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-san-cristobal',
  templateUrl: './san-cristobal.component.html',
  styles: [],
})
export class SanCristobalComponent implements OnInit {
  public temp: string[] = ['', '', '', '', ''];

  public selectedButton: number = 0;

  constructor() {}

  ngOnInit(): void {}

  public cambiarButton(num: number): void {
    this.selectedButton = num;
  }
}
