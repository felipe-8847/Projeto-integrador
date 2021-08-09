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
 listaCategoria: Categoria[]
 idProduto: number

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit(): void {
    if(environment.token == ''){
      this.router.navigate(['/produtos'])
    }
    let id = this.route.snapshot.params['id']
    this.findByIdProduto(id)
  }

  findByIdProduto(id: number){
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto) =>{this.produto = resp})

  //findByIdPostagem(id: number){
   // this.postagemService.getByIdPostagem(id).subscribe((resp: Postagem) => {
     // this.postagem = resp
   // })

   atualizar(){
     this.produto.id = this.idProduto
    this.produto.categoria = this.categoriaService
    
      this.produtoService.putProduto(this.produto).subscribe((resp: Produto) =>{
        alert('Postagem atualizada com sucesso!')
      this.router.navigate(['/inicio'])
      })
    }
}
 
//atualizar(){
//  this.tema.id = this.idTema
  //this.postagem.tema = this.tema

//  this.postagemService.putPostagem(this.postagem).subscribe((resp: Postagem) =>{
  //  alert('Postagem atualizada com sucesso!')
    //this.router.navigate(['/inicio'])
  //})
//}