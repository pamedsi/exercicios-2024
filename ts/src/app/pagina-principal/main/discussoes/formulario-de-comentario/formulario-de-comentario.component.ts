import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-formulario-de-comentario',
  templateUrl: './formulario-de-comentario.component.html',
  styleUrls: ['./formulario-de-comentario.component.css']
})
export class FormularioDeComentarioComponent implements OnInit {
  @Output() clickEmEnviar: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  enviar(){
    this.clickEmEnviar.emit();
  }

}
