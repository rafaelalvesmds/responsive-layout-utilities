import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemples',
  templateUrl: './exemples.component.html',
  styleUrls: ['./exemples.component.scss']
})
export class ExemplesComponent implements OnInit {

  constructor() { }

  getScreenWidth!: number;

  ngOnInit(): void {
    this.getScreenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
  }

}

