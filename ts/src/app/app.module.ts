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
import { PerguntasComponent } from './pagina-principal/main/discussoes/perguntas/perguntas.component';

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
    PerguntasComponent
  ],
    imports: [
        BrowserModule,
        NgOptimizedImage
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
