import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  
  user: User = new User
  confirmarSenha: string
  tipo: string

  constructor(
    private authService: AuthService,
    private router: Router,

  ) { }

  ngOnInit() {
    window.scroll(0, 0)
  }

  confirmaSenha(event: any) { //metodo para comparar senha o nome tem que estar igual no cadastro.html
    this.confirmarSenha = event.target.value
  }

  tipoUser(event: any) {
    this.tipo = event.target.value
  }

  cadastrarUser() {
    console.log("user " + JSON.stringify(this.user))
    this.user.tipo = this.tipo
    if (this.user.senha != this.confirmarSenha) {
      /* alert("Senha não correspondente") funciona */
      Swal.fire(
        'Ops!',
        'Senha não correspondente',
        'error'
      )
    } else {
      this.authService.cadastro(this.user).subscribe((resp: User) => {
        this.user = resp
        this.router.navigate(['/login'])
        /* alert("Cadastrado com sucesso") funciona */
        Swal.fire(
          'Parabéns',
          'Cadastrado com sucesso',
          'success'
        )
      })
    }
  }
}

