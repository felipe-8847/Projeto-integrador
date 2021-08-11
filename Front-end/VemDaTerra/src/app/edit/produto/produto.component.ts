import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { Produto } from 'src/app/model/Produto';
import { CategoriaService } from 'src/app/service/categoria.service';
import { ProdutoService } from 'src/app/service/produto.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

 produto: Produto = new Produto()
 categoria: Categoria = new Categoria()
 listaCategoria: Categoria[]
 idCateg: number

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit(){
    if(environment.token == ''){
      this.router.navigate(['/produtos'])
    }
    let id = this.route.snapshot.params['id']
    this.findByIdProduto(id)
  }

  findByIdProduto(id: number){
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto) =>{this.produto = resp})
  }

  atualizarP(){
    //this.categoria.id = this.idCateg
    //this.produto.categoria = this.categoria

    this.produtoService.putProduto(this.produto).subscribe((resp: Produto) =>{
      this.produto = resp
      alert('Produto atualizado com sucesso!')
      this.router.navigate(['/cadastro/produto'])
    })
  }
}