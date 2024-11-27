import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import Produto from '../../../model/Produto';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-tabela-produtos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabela-produtos.component.html',
  styleUrl: './tabela-produtos.component.css'
})
export class TabelaProdutosComponent implements OnInit {
  produtos: Produto[] = [];
  produtoSelecionado: any = null;

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.produtoService.getProdutos().subscribe(data => {
      this.produtos = data;
    })
  }

  addProduto(produto: Produto) {
    this.produtoService.addProdutos(produto).subscribe((produto) => {
      this.produtos.push(produto);
    })
  }



}