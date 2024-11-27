import { Component } from '@angular/core';
import Produto  from '../../../model/Produto'
import { ProdutoService } from '../../services/produto.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
 
@Component({
  selector: 'app-cadastrar-produtos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastrar-produtos.component.html',
  styleUrl: './cadastrar-produtos.component.css'
})
export class CadastrarProdutosComponent {

  produto = {
    nome: '',
    preco: 0,
    quantidade: 0
  };

  constructor(private produtoService: ProdutoService){}

  cadastrarProduto(): void{
    this.produtoService.addProdutos(this.produto).subscribe({
      next: (response) => {
        this.produto = {nome: '', preco: 0, quantidade: 0}
      },
      error: (err) => {
        console.error('Erro ao cadastrar o produto:', err)
      }
    })
  }


}
