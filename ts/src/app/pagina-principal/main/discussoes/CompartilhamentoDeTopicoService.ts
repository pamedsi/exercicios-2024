import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {FormularioDeTopico} from "./formulario-de-topico/formulario-de-topico.component";

@Injectable({
  providedIn: 'root'
})
export class CompartilhamentoDeTopicoService {
  private formularioInicial = new Subject<FormularioDeTopico>();
  formularioAtual = this.formularioInicial.asObservable();

  constructor() { }

  mudarDados(message: FormularioDeTopico) {
    this.formularioInicial.next(message);
  }
}
