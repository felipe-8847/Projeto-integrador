import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  token = {
     headers: new HttpHeaders().set('Authorization', environment.token)
   }
   getAllProduto(): Observable<Produto[]>{
     return this.http.get<Produto[]>('https://vemdaterrabrasil.herokuapp.com/produto', this.token)
   }
   postProduto(produto: Produto): Observable<Produto>{
     return this.http.post<Produto>('https://vemdaterrabrasil.herokuapp.com/produto', produto, this.token)
   }
  
  getByIdProduto(id: number): Observable<Produto> {
     return this.http.get<Produto>(`https://vemdaterrabrasil.herokuapp.com/produto/${id}`, this.token)
  }

  getByNomeProduto(nome: string): Observable<Produto[]>{
    return this.http.get<Produto[]>('https://vemdaterrabrasil.herokuapp.com/produto/nome', this.token)
  }

 
  putProduto(produto: Produto): Observable<Produto[]>{
    return this.http.put<Produto[]>('https://vemdaterrabrasil.herokuapp.com/produto', this.token)
  }

  deleteProduto(produto: Produto){
    return this.http.delete('https://vemdaterrabrasil.herokuapp.com/produto/${id}', this.token)
    //(https:gabrielapaganini.herokuapp.com/postagens/${id}, this.token)
  }
}
 
 
