import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {

  produto: Produto = new Produto()
  listaProdutos: Produto[]

  constructor(
    private router: Router,
    private produtoService: ProdutoService
  ) { }

  ngOnInit() {
    if(environment.token == '') {
      this.router.navigate(['/login'])
    }
    this.findAllProdutos()
  }
  findAllProdutos(){
    this.produtoService.getAllProduto().subscribe((resp: Produto[])=>{
      this.listaProdutos = resp
    })
  }
  cadastrarP(){
    console.log("usuer " + JSON.stringify(this.produto))
    this.produtoService.postProduto(this.produto).subscribe((resp: Produto)=>{
      this.produto = resp
      alert('Categoria cadastrada com sucesso!!!')
      this.produto = new Produto()
      this.findAllProdutos()
    })
  }

}
