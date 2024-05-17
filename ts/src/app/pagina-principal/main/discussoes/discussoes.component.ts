import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discussoes',
  templateUrl: './discussoes.component.html',
  styleUrls: ['./discussoes.component.css']
})
export class DiscussoesComponent implements OnInit {
  formularioAVista = false

  constructor() { }

  ngOnInit(): void {
  }

  tornarFormularioVisivel() {
    this.formularioAVista = true;
  }

}
