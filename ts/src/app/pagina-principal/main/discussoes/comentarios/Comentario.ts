export class Comentario {
  private _assunto: string
  private _autor: string
  private _conteudo: string
  private _curtidas: number
  respostas: Comentario[]

  constructor(assunto: string, autor: string, conteudo: string) {
    this._assunto = assunto;
    this._autor = autor;
    this._conteudo = conteudo;
    this._curtidas = 0;
    this.respostas = [];
  }

  curtir() {
    this._curtidas++
  }

  adicionarComentario(comentario: Comentario) {
    this.respostas.push(comentario)
  }

  get assunto(): string {
    return this._assunto;
  }

  set assunto(value: string) {
    this._assunto = value;
  }

  get autor(): string {
    return this._autor;
  }

  set autor(value: string) {
    this._autor = value;
  }

  get conteudo(): string {
    return this._conteudo;
  }

  set conteudo(value: string) {
    this._conteudo = value;
  }

  get curtidas(): number {
    return this._curtidas;
  }
  set curtidas(value: number) {
    this._curtidas = value;
  }
}
