import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';
import { CategoriaService } from '../service/categoria.service';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';
import { User } from '../model/User';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  userLogin: UserLogin = new UserLogin()
  listaCategorias: Categoria[]
  listaProdutos: Produto[]

  user: User = new User()
  idUser = environment.id

  env: any = environment
  localStorageEmail = localStorage.getItem('email')
  localStorageTipo = localStorage.getItem('tipo')
  tituloPost: string


  constructor(
    private auth: AuthService,
    private router: Router,
    private categoriaService: CategoriaService,
    private produtoService: ProdutoService



  ) { }

  ngOnInit() {
    window.scroll(0, 0)

    this.findAllCategorias()
    this.getAllProduto()
    localStorage.setItem('tipo', "");
  
  }

  login() {

    this.auth.login(this.userLogin).subscribe((resp: UserLogin) => {
      this.userLogin = resp
      environment.id = this.userLogin.id
      localStorage.setItem('email', resp.email);//localstorage é para guardar que o usuario é admin
      this.localStorageEmail = resp.email
      localStorage.setItem('tipo', resp.tipo);
      this.localStorageTipo = resp.tipo


      this.router.navigate(['/inicio'])
    }, erro => {
      if (erro.status == 500) {
        /* alert('Usuário ou senha estão incorretos!') funciona */
        Swal.fire(
          'Que pena!',
          'Usuário ou senha estão incorretos!',
          'error'
        )
      }
    })
  }

  sair() {

    localStorage.setItem('tipo', "");

    localStorage.removeItem("email")

    this.localStorageEmail = null

    localStorage.removeItem("tipo")
    this.localStorageTipo = null



   // this.router.navigate(['/entrar'])
   // environment.token = ''
    //environment.nome = ''
    //environment.id = 0

  }

  findAllCategorias() {
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) => {
      this.listaCategorias = resp
    })
  }

  findBycategoria(){

  }

  findByIdUser(){
    this.auth.getByIdUser(this.idUser).subscribe((resp: User) => {
      this.user = resp
    })
  }
  
  getAllProduto(){
    this.produtoService.getAllProduto().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp
    })
  }


}