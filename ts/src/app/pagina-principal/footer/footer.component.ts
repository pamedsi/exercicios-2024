import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  readonly parteEmNegrito: string;
  readonly parteSemNegrito: string;

  constructor() {
    this.parteEmNegrito = this.textoCompleto.split(" gerado")[0]
    this.parteSemNegrito = this.textoCompleto.replace(this.parteEmNegrito, "")
  }

  ngOnInit(): void {
  }

  private readonly textoCompleto = `Preservar a memória do evento e ampliar o acesso ao conhecimento científico gerado em eventos é a razão de ser da plataforma Galoá Proceedings.

Os trabalhos publicados aqui têm maior alcance e ficam disponíveis para toda a comunidade científica, mantendo aceso o debate científico fomentado pelos encontros e aumentando o impacto do evento.`
}
