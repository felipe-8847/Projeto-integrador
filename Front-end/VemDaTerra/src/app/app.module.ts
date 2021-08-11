import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { InicioComponent } from './inicio/inicio.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { ContatoComponent } from './contato/contato.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { CardProdutoComponent } from './card-produto/card-produto.component';
import { CadastroCategoriaComponent } from './cadastro-categoria/cadastro-categoria.component';
import { ProdutoComponent } from './edit/produto/produto.component';
import { CategoriaComponent } from './edit/categoria/categoria.component';
import { CategoriaDeleteComponent } from './delete/categoria-delete/categoria-delete.component';
import { ProdutoDeleteComponent } from './delete/produto-delete/produto-delete.component';
import { AlertasComponent } from './alertas/alertas.component';
//import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    InicioComponent,
    SobreNosComponent,
    //LoginComponent,
    ContatoComponent,
    CadastroComponent,
    CadastroCategoriaComponent,
    CadastroProdutoComponent,
    CardProdutoComponent,
    ProdutoComponent,
    CategoriaComponent,
    CategoriaDeleteComponent,
    ProdutoDeleteComponent,
    AlertasComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
