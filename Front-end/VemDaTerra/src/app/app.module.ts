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
<<<<<<< HEAD

import { ProdutoComponent } from './edit/produto/produto.component';

=======
import { CategoriaComponent } from './edit/categoria/categoria.component';
>>>>>>> 222e9b38a725d5a35a5fb958d710544e8f1b8b7f
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
<<<<<<< HEAD
     ProdutoComponent,
    
=======
    CategoriaComponent
>>>>>>> 222e9b38a725d5a35a5fb958d710544e8f1b8b7f
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
