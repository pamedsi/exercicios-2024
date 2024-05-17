export class Post {
  private readonly _autor: string;

  constructor(autor: string) {
    this._autor = autor;
  }

  get autor(): string {
    return this._autor;
  }
}
