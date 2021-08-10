import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.css']
})
export class CardProdutoComponent implements OnInit {

  produto: Produto = new Produto()
  listaProdutos: Produto[]

  constructor(
    private produtoService: ProdutoService
  ) { }

  ngOnInit() {

    this.findAllProdutos()
    
  }


  findAllProdutos(){
    this.produtoService.getAllProduto().subscribe((resp: Produto[])=>{
      this.listaProdutos = resp
    })
  }

}
