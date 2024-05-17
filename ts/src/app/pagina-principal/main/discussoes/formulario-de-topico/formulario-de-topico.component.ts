import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CompartilhamentoDeTopicoService} from "../CompartilhamentoDeTopicoService";

@Component({
  selector: 'app-formulario-de-topico',
  templateUrl: './formulario-de-topico.component.html',
  styleUrls: ['./formulario-de-topico.component.css']
})
export class FormularioDeTopicoComponent implements OnInit {
  assunto = ''
  conteudo = ''
  @Output() clickEmEnviar = new EventEmitter<void>();

  constructor(private compartilhamentoDeTopico: CompartilhamentoDeTopicoService) { }

  ngOnInit(): void {
  }

  enviar(){
    // if (!this.assunto || !this.conteudo) return
    const formularioPreenchido: FormularioDeTopico = { assunto: this.assunto, conteudo: this.conteudo }
    this.compartilhamentoDeTopico.mudarDados(formularioPreenchido)
    this.clickEmEnviar.emit()
  }
}

export interface FormularioDeTopico {
  assunto: string
  conteudo: string
}
