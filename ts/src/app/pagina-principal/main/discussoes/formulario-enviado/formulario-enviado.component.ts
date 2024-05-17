import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-topico-enviado',
  templateUrl: './formulario-enviado.component.html',
  styleUrls: ['./formulario-enviado.component.css']
})
export class FormularioEnviadoComponent implements OnInit {
  @Output() clickEmCriarNovoTopico: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  criarNovoTopico(){
    this.clickEmCriarNovoTopico.emit();
  }
}
