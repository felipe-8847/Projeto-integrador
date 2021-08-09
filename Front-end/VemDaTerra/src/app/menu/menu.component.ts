import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
  })
export class MenuComponent implements OnInit {

  userLogin: UserLogin = new UserLogin()
  env: any = environment
  localStorageEmail = localStorage.getItem('email')
  localStorageTipo = localStorage.getItem('tipo')

  constructor(
    private auth: AuthService,
    private router: Router,
    
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  
  }
  login(){
    
    this.auth.login(this.userLogin).subscribe((resp: UserLogin)=>{
       this.userLogin = resp
          
      localStorage.setItem('email', resp.email);//localstorage é para guardar que o usuario é admin
     this.localStorageEmail = resp.email
      localStorage.setItem('tipo', resp.tipo);
       this.localStorageTipo = resp.tipo

    
      this.router.navigate(['/inicio'])
    }, erro =>{
      if(erro.status == 500){
        alert('Usuário ou senha estão incorretos!')
      }
    })
  }
  sair(){
    localStorage.removeItem("email")
    this.localStorageEmail = null

    localStorage.removeItem("tipoUsuario")
    this.localStorageTipo = null
   // this.router.navigate(['/entrar'])
   // environment.token = ''
    //environment.nome = ''
    //environment.id = 0
  }
}