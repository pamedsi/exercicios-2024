import {Resposta} from "./Resposta";
import {Post} from "./Post";

export class Topico {
  private readonly _post: Post;
  private readonly _assunto: string
  private readonly _autor: string
  private readonly _conteudo: string
  private _curtidas: number
  private readonly _respostas: Resposta[]
  private _mostrandoRespostas: boolean

  constructor(post: Post, assunto: string, autor: string, conteudo: string) {
    this._post = post
    this._assunto = assunto;
    this._autor = autor;
    this._conteudo = conteudo;
    this._curtidas = 0;
    this._respostas = [];
    this._mostrandoRespostas = false
  }

  get post(): Post {
    return this._post;
  }

  get mostrandoRespostas(): boolean {
    return this._mostrandoRespostas;
  }

  mostrarRespostas() {
    this._mostrandoRespostas = true;
  }

  curtir(): void {
    this._curtidas++
  }

  adicionarResposta(comentario: Resposta) {
    this._respostas.push(comentario)
  }

  get assunto(): string {
    return this._assunto;
  }

  get autor(): string {
    return this._autor;
  }

  get conteudo(): string {
    return this._conteudo;
  }

  get curtidas(): number {
    return this._curtidas;
  }

  get respostas(): Resposta[] {
    return this._respostas.sort((a, b) => a.momentoDaResposta.getTime() - b.momentoDaResposta.getTime());
  }
}