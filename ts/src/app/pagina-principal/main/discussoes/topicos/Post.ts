export class Post {
  private readonly _autor: string;
  private readonly _coautores: string[];

  constructor(autor: string, coautores: string[]) {
    this._autor = autor;
    this._coautores = coautores;
  }

  get coautores() {
    return this._coautores;
  }

  get autor(): string {
    return this._autor;
  }
}
