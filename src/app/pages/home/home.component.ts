import { Component, HostListener, OnInit } from '@angular/core';

export interface PeriodicElement {
  coluna1: string;
  coluna2: string;
  coluna3: string;
  coluna4: string;
  coluna5: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { coluna1: 'Conteúdo', coluna2: 'Conteúdo', coluna3: 'Conteúdo', coluna4: 'Conteúdo', coluna5: 'Conteúdo' },
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  columns: string[] = ['coluna1', 'coluna2', 'coluna3', 'coluna4', 'coluna5'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
    this.getScreenWidth = window.innerWidth;
  }

  getScreenWidth!: number;

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
  }


}
