import { Component, OnInit } from '@angular/core';
import {Comentario} from "./Comentario";

@Component({
  selector: 'app-perguntas',
  templateUrl: './perguntas.component.html',
  styleUrls: ['./perguntas.component.css']
})
export class PerguntasComponent implements OnInit {
  comentarios: Comentario[] = []

  constructor() { }

  ngOnInit(): void {
    const primeiroComentario = new Comentario("Assunto da pergunta aparece aqui", "Carlos Henrique Santos", "Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo...")
    const segundoComentario = new Comentario("Assunto da pergunta aparece aqui", "Carlos Henrique Santos", "Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo...")
    const respostaAosComentarios = new Comentario("Essa é a resposta de exempli", "Patrick Melo", "Aqui aparecerá o comentário que fiz.")
    primeiroComentario.curtir()
    segundoComentario.curtir()
    primeiroComentario.adicionarComentario(respostaAosComentarios)
    segundoComentario.adicionarComentario(respostaAosComentarios)
    this.comentarios.push(primeiroComentario, segundoComentario)
  }

}
