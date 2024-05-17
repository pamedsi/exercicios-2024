import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import {NgOptimizedImage} from "@angular/common";
import { HeaderComponent } from './pagina-principal/header/header.component';
import {MainComponent} from "./pagina-principal/main/main.component";
import {VideoComponent} from "./pagina-principal/main/video/video.component";
import { ResumoComponent } from './pagina-principal/main/resumo/resumo.component';
import { DiscussoesComponent } from './pagina-principal/main/discussoes/discussoes.component';
import { TopicosComponent } from './pagina-principal/main/discussoes/topicos/topicos.component';
import { FormularioDeTopicoComponent } from './pagina-principal/main/discussoes/formulario-de-topico/formulario-de-topico.component';
import { ConviteAAcaoComponent } from './pagina-principal/main/discussoes/convite-a-acao/convite-a-acao.component';
import { FormularioEnviadoComponent } from './pagina-principal/main/discussoes/formulario-enviado/formulario-enviado.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MenuLateralComponent,
    PaginaPrincipalComponent,
    MainComponent,
    VideoComponent,
    HeaderComponent,
    ResumoComponent,
    DiscussoesComponent,
    TopicosComponent,
    FormularioDeTopicoComponent,
    ConviteAAcaoComponent,
    FormularioEnviadoComponent
  ],
  imports: [
    BrowserModule,
    NgOptimizedImage,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
