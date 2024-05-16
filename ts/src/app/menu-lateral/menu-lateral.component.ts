import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {
  opcoesDoMenu = ['Apresentação','Comitês', 'Autores', 'Eixos temáticos', 'Trabalhos', 'Contato']
  opcaoClicada = ''

  constructor() { }

  ngOnInit(): void {}

  selecionarOpcao(opcaoSelecionada: string){
    this.opcaoClicada = opcaoSelecionada
  }

  desselecionarOpcao(){
    this.opcaoClicada = ''
  }
}
