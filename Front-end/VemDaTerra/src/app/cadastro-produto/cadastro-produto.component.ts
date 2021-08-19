import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';
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
  ok: boolean = false


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
      console.log(" teste "+ this.listaProdutos)
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

    this.produtoService.postProduto(this.produto).subscribe((resp: Produto)=>{
      this.produto = resp
      Swal.fire('Produto Cadastrado com Sucesso!!')
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

  compararId(){
    
    if (environment.id != this.produto.usuario.id){
      console.log("Env:"+environment.id + "Pro:"+this.produto.usuario.id)
      return this.ok

    }else{
      
      return this.ok = true
    }

   
  }

}
