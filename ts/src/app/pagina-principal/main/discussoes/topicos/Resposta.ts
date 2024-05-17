import {Topico} from "./Topico";

export class Resposta {
  private readonly _momentoDaResposta: Date;
  private readonly _autor: string;
  private readonly _conteudo: string;

  constructor(autor: string, conteudo: string) {
    this._autor = autor;
    this._conteudo = conteudo;
    this._momentoDaResposta = new Date()
  }

  get momentoDaResposta(): Date {
    return this._momentoDaResposta;
  }

  get autor(): string {
    return this._autor;
  }

  get conteudo(): string {
    return this._conteudo;
  }

  ehAutorDoPost(topico: Topico): boolean {
    return topico.post.autor === this._autor;
  }
}
