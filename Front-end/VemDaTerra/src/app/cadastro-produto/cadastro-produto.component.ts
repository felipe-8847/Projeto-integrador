import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {

  produto: Produto = new Produto()
  listaProdutos: Produto[]


  categoria: Categoria = new Categoria()
  listaCategorias: Categoria[]
  idcategoria: number


  user: User = new User()
  idUser = environment.id

  constructor(
    private router: Router,
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    public authService: AuthService,

  ) { }

  ngOnInit() {
    if(environment.token == '') {
      this.router.navigate(['/login'])
    }
    this.findAllProdutos()
    this.findAllCategorias()
  }

  
  findAllProdutos(){
    this.produtoService.getAllProduto().subscribe((resp: Produto[])=>{
      this.listaProdutos = resp
    })
  }
  cadastrarP(){

    let usuario: User = new User()

    usuario.id = environment.id
    this.produto.usuario = usuario

    console.log(environment.id)

    this.categoria.id = this.idcategoria
    this.produto.categoria = this.categoria

     this.user.id = this.idUser
     this.produto.usuario = this.user


    console.log("user" + JSON.stringify(this.produto))
    this.produtoService.postProduto(this.produto).subscribe((resp: Produto)=>{
      this.produto = resp
      alert('Produto cadastrado com sucesso!!!')
      this.produto = new Produto()
      this.findAllProdutos()
    })
  }

  findAllCategorias(){
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[])=>{
      this.listaCategorias = resp
    })
  }

  // teste de vinculo de user com produto

  findByIdUser(){
    this.authService.getByIdUser(this.idUser).subscribe((resp: User) => {
      this.user = resp
    })
  }

  findByIdCategoria(){
    this.categoriaService.getByIdCategoria(this.idcategoria).subscribe((resp: Categoria) =>{
      this.categoria = resp
    })
  }

}
