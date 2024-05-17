import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-convite-a-acao',
  templateUrl: './convite-a-acao.component.html',
  styleUrls: ['./convite-a-acao.component.css']
})
export class ConviteAAcaoComponent implements OnInit {
  @Output() clickEmCriarTopico: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  criarTopico() {
    this.clickEmCriarTopico.emit()
  }
}
