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
    const post = new Post("Adriano da Silva", ["Carmila Ferreira Andrade", "Ana Carolina"])
    const primeiroTopico = new Topico(post, "Assunto da pergunta aparece aqui", "Carlos Henrique Santos", "Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo...")
    // const segundoTopico = new Topico(post, "Assunto da pergunta aparece aqui", "Carlos Henrique Santos", "Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo...")
    const respostaAosTopicos = new Resposta("Patrick Melo","Essa é a resposta de exemplo")
    const respostaDoAutor = new Resposta("Adriano da Silva", "Resposta do autor é aqui. Relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.")
    const resposta1DeCoautor = new Resposta("Carmila Ferreira Andrade", this.textoDaCarmila)
    const resposta2DeCoautor = new Resposta("Ana Carolina", "Resposta do autor é aqui. Relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.")

    primeiroTopico.curtir()
    primeiroTopico.adicionarResposta(respostaAosTopicos)
    primeiroTopico.adicionarResposta(respostaDoAutor)
    primeiroTopico.adicionarResposta(resposta1DeCoautor)
    primeiroTopico.adicionarResposta(resposta2DeCoautor)
    // segundoTopico.adicionarResposta(respostaAosTopicos)
    // segundoTopico.adicionarResposta(resposta1DeCoautor)
    // segundoTopico.adicionarResposta(resposta2DeCoautor)
    // segundoTopico.curtir(); segundoTopico.curtir(); segundoTopico.curtir()
    this.topicos.push(primeiroTopico)
  }



  private readonly textoDaCarmila = `Também ínteressante lembrar que o relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.

Situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.`
}
