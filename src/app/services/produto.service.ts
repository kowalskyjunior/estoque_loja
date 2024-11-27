import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Produto from '../../model/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private apiUrl = 'http://localhost:3000/produtos';

  constructor(private http: HttpClient) { }

  getProdutos(): Observable<Produto[]>{
    return this.http.get<Produto[]>(this.apiUrl);
  }

  addProdutos(produto: Produto): Observable<Produto>{
    return this.http.post<Produto>(`${this.apiUrl}`,produto)
  }

  updateProduto(id: number, produto:Produto): Observable<Produto>{
    return this.http.put<Produto>(`${this.apiUrl}/${id}`, produto)
  }

}
