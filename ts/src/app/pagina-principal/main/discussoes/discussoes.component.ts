import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discussoes',
  templateUrl: './discussoes.component.html',
  styleUrls: ['./discussoes.component.css']
})
export class DiscussoesComponent implements OnInit {
  statusDoFormulario = StatusDoNovoTopico.CHAMADA_PARA_ACAO

  constructor() {
  }

  ngOnInit(): void {

  }

  mudarStatusDoFormulario(status: StatusDoNovoTopico): void {
    this.statusDoFormulario = status;
  }

  protected readonly StatusDoNovoTopico = StatusDoNovoTopico;
}
enum StatusDoNovoTopico {
  CHAMADA_PARA_ACAO,
  FORMULARIO_A_VISTA,
  FORMULARIO_ENVIADO
}
