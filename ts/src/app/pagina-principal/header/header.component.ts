import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  opcoesDeIdioma = ['PT, BR', 'EN-US', 'ES-MX', 'FR-FR', 'DE-DE']

  constructor() { }

  ngOnInit(): void {
  }

}
