import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/model/Produto';
import { ProdutoService } from 'src/app/service/produto.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-produto-delete',
  templateUrl: './produto-delete.component.html',
  styleUrls: ['./produto-delete.component.css']
})
export class ProdutoDeleteComponent implements OnInit {

  produto: Produto = new Produto()
  idProd: number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private produtoService: ProdutoService

  ) { }

  ngOnInit() {

    window.scroll(0,0)

    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }

    this.idProd = this.route.snapshot.params['id']
    this.findByIdProduto(this.idProd)
  }

  findByIdProduto(id: number){
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto) => {
      this.produto = resp
    })
  }
  apagar(){
    this.produtoService.deleteProduto(this.idProd).subscribe(()=>{
      alert('Produto apagado com sucesso!')
      this.router.navigate(['/cadastro/produto'])
    })
  }

}
