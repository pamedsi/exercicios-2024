import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import {NgOptimizedImage} from "@angular/common";
import { HeaderComponent } from './pagina-principal/header/header.component';
import {MainComponent} from "./pagina-principal/main/main.component";
import {VideoComponent} from "./pagina-principal/main/video/video.component";

@NgModule({
  declarations: [
    AppComponent,
    MenuLateralComponent,
    PaginaPrincipalComponent,
    MainComponent,
    VideoComponent,
    HeaderComponent
  ],
    imports: [
        BrowserModule,
        NgOptimizedImage
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
