import {Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
})
export class VideoComponent implements OnInit {
  chaves = ['Tipo de Apresentação', 'Eixo temático', 'Palavras-chaves']
  valores = ['Pôster', 'Alimentação e saúde (AS)', 'Alimentos funcionais, alimentação escolar.']

  constructor() { }

  ngOnInit(): void {}
}
