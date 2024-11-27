import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { CadastrarProdutosComponent } from "./components/cadastrar-produtos/cadastrar-produtos.component";
import { TabelaProdutosComponent } from "./components/tabela-produtos/tabela-produtos.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CadastrarProdutosComponent, TabelaProdutosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'estoque_loja';
}
