import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { CategoriaService } from 'src/app/service/categoria.service';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-categoria-delete',
  templateUrl: './categoria-delete.component.html',
  styleUrls: ['./categoria-delete.component.css']
})
export class CategoriaDeleteComponent implements OnInit {

  categoria: Categoria = new Categoria()
  idCategoria: number

  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if (environment.token == ''){
      this.router.navigate(['/entrar'])
    }
    this.idCategoria = this.route.snapshot.params['id']
    this.findByIdCategoria(this.idCategoria)
  }

  findByIdCategoria(id: number){
    this.categoriaService.getByIdCategoria(id).subscribe((resp: Categoria) =>{
      this.categoria = resp
      console.log("categoria "+JSON.stringify(this.categoria))
    })
  }
  apagar(){
    this.categoriaService.deleteCategoria(this.idCategoria).subscribe(()=>{
      this.router.navigate(['/cadastro/categoria'])
      
          Swal.fire(
            'Deletado!',
            'Sua Categoria foi deletada',
            'success'
          )

    })
  }
}
