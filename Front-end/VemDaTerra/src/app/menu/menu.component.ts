import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';
import { CategoriaService } from '../service/categoria.service';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  userLogin: UserLogin = new UserLogin()
  listaCategorias: Categoria[]
  env: any = environment
  localStorageEmail = localStorage.getItem('email')
  localStorageTipo = localStorage.getItem('tipo')

  constructor(
    private auth: AuthService,
    private router: Router,
    private categoriaService: CategoriaService

  ) { }

  ngOnInit() {
    window.scroll(0, 0)

    this.findAllCategorias()
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
      Swal.fire(
        'Seja Bem-Vinde!',
        'Sua eco-experiência começa aqui!!!',
        'success'
      )

      this.router.navigate(['/inicio'])
    }, erro => {
      if (erro.status == 500) {
        /* alert('Usuário ou senha estão incorretos!') funciona */
        Swal.fire(
          'Oops!',
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

    localStorage.removeItem("tipoUsuario")
    this.localStorageTipo = null



    // this.router.navigate(['/entrar'])
    // environment.token = ''
    //environment.nome = ''
    //environment.id = 0
    Swal.fire(
      'Já vai?!',
      'Vou ficar com saudades!!!',
      'question'
    )
  }

  findAllCategorias() {
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) => {
      this.listaCategorias = resp
    })
  }
}