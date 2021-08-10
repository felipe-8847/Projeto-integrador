import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroCategoriaComponent } from './cadastro-categoria/cadastro-categoria.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CardProdutoComponent } from './card-produto/card-produto.component';
import { ContatoComponent } from './contato/contato.component';
import { CategoriaDeleteComponent } from './delete/categoria-delete/categoria-delete.component';
import { ProdutoDeleteComponent } from './delete/produto-delete/produto-delete.component';
import { CategoriaComponent } from './edit/categoria/categoria.component';
import { ProdutoComponent } from './edit/produto/produto.component';
import { InicioComponent } from './inicio/inicio.component';
//import { LoginComponent } from './login/login.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';


const routes: Routes = [

  {path: '', redirectTo: 'inicio', pathMatch: 'full'},

  {path:'inicio', component: InicioComponent},
  {path:'sobre', component: SobreNosComponent},
  //{path:'login', component: LoginComponent},
  {path:'contato', component: ContatoComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'cadastro/categoria', component: CadastroCategoriaComponent},
  {path: 'cadastro/produto', component: CadastroProdutoComponent},
  {path: 'produto', component: CardProdutoComponent},
  {path: 'edit/categoria/:id', component: CategoriaComponent},
  {path: 'edit/produto/:id', component: ProdutoComponent},
  {path: 'delete/categoria-delete/:id', component: CategoriaDeleteComponent},
  {path: 'delete/produto-delete/:id', component: ProdutoDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
