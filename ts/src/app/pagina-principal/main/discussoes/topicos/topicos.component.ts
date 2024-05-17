import { Component, OnInit } from '@angular/core';
import {Topico} from "./Topico";
import {Resposta} from "./Resposta";
import {Post} from "./Post";

@Component({
  selector: 'app-topicos',
  templateUrl: './topicos.component.html',
  styleUrls: ['./topicos.component.css']
})
export class TopicosComponent implements OnInit {
  topicos: Topico[] = []

  constructor() { }

  ngOnInit(): void {
    const post = new Post("Adriano da Silva")
    const primeiroTopico = new Topico(post, "Assunto da pergunta aparece aqui", "Carlos Henrique Santos", "Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo...")
    const segundoTopico = new Topico(post, "Assunto da pergunta aparece aqui", "Carlos Henrique Santos", "Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo...")
    const respostaAosTopicos = new Resposta("Patrick Melo","Essa é a resposta de exemplo")
    const respostaDoAutor = new Resposta("Adriano da Silva", "Resposta do autor é aqui. Relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.")
    primeiroTopico.curtir()
    segundoTopico.curtir()
    primeiroTopico.adicionarResposta(respostaAosTopicos)
    segundoTopico.adicionarResposta(respostaAosTopicos)
    primeiroTopico.adicionarResposta(respostaDoAutor)
    this.topicos.push(primeiroTopico, segundoTopico)
  }


}
