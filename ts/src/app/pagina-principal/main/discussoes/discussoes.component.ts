import { Component, OnInit } from '@angular/core';
import {FormularioDeTopico} from "./formulario-de-topico/formulario-de-topico.component";

@Component({
  selector: 'app-discussoes',
  templateUrl: './discussoes.component.html',
  styleUrls: ['./discussoes.component.css']
})
export class DiscussoesComponent implements OnInit {
  statusDoFormulario = StatusDoNovoTopico.CHAMADA_PARA_ACAO
  formularioRecebido!: FormularioDeTopico

  constructor() {
  }

  ngOnInit(): void {

  }

  mudarStatusDoFormulario(status: StatusDoNovoTopico): void {
    this.statusDoFormulario = status;
  }

  receberFormulario(formularioPreenchido : FormularioDeTopico): void {
    this.formularioRecebido = formularioPreenchido;
    // this.mudarStatusDoFormulario(StatusDoNovoTopico.FORMULARIO_ENVIADO)
  }

  protected readonly StatusDoNovoTopico = StatusDoNovoTopico;
}
enum StatusDoNovoTopico {
  CHAMADA_PARA_ACAO,
  FORMULARIO_A_VISTA,
  FORMULARIO_ENVIADO
}
