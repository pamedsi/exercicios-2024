import {Component, OnInit} from '@angular/core';
import {CompartilhamentoDeTopicoService} from "../CompartilhamentoDeTopicoService";

@Component({
  selector: 'app-formulario-de-topico',
  templateUrl: './formulario-de-topico.component.html',
  styleUrls: ['./formulario-de-topico.component.css']
})
export class FormularioDeTopicoComponent implements OnInit {
  assunto = ''
  conteudo = ''

  constructor(private compartilhamentoDeTopico: CompartilhamentoDeTopicoService) { }

  ngOnInit(): void {
  }

  enviar(){
    if (!this.assunto || !this.conteudo) return
    const formularioPreenchido: FormularioDeTopico = { assunto: this.assunto, conteudo: this.conteudo }
    this.compartilhamentoDeTopico.mudarDados(formularioPreenchido)
  }
}

export interface FormularioDeTopico {
  assunto: string
  conteudo: string
}
