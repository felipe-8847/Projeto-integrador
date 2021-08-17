import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-card-categoria',
  templateUrl: './card-categoria.component.html',
  styleUrls: ['./card-categoria.component.css']
})
export class CardCategoriaComponent implements OnInit {

  listaProdutos: Categoria[]
  listaProdutoPorCategoria: Produto[]

  user: User = new User()
  idUser = environment.id

  constructor(
    private categoriaService: CategoriaService,
    private auth: AuthService


  ) { }

  ngOnInit() {

    this.findAllProdutos()
  }

  findAllProdutos(){
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[])=>{
      this.listaProdutos = resp
    })
  }

  findByIdUser(){
    this.auth.getByIdUser(this.idUser).subscribe((resp: User) => {
      this.user = resp
    })
  }

  getAllTemas(){
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) => {
      this.listaProdutos = resp
    })
  }

  // findByIdTema(){
  //   this.categoriaService.getByIdCategoria(this.idproduto).subscribe((resp: Categoria) =>{
  //     this.categoria = resp
  //   })
  // }

}
