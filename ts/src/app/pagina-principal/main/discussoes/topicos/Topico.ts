import {Resposta} from "./Resposta";
import {Post} from "./Post";

export class Topico {
  private readonly _post: Post;
  private _assunto: string
  private readonly _autor: string
  private _conteudo: string
  private _curtidas: number
  private readonly _respostas: Resposta[]
  private _mostrandoRespostas: boolean
  private readonly _emAnalise: boolean
  private _editavel: boolean

  constructor(post: Post, assunto: string, autor: string, conteudo: string, emAnalise: boolean) {
    this._post = post
    this._assunto = assunto;
    this._autor = autor;
    this._conteudo = conteudo;
    this._curtidas = 0;
    this._respostas = [];
    this._mostrandoRespostas = false
    this._emAnalise = emAnalise
    this._editavel = false
  }

  tornarEditavel() {
    this._editavel = true
  }
  finalizarEdicao() {
    this._editavel = false
  }

  get estaEditavel(): boolean {
    return this._editavel;
  }

  get emAnalise(): boolean {
    return this._emAnalise;
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
  set assunto(value: string) {
    this._assunto = value;
  }

  set conteudo(value: string) {
    this._conteudo = value;
  }
}
