import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  tabuleiro: string[] = Array(9).fill('');
  proximoJogador: string = 'X';
  posicao: number | undefined;

  aoClicar(indice: number) {
    if (!this.tabuleiro[indice]) {
      this.tabuleiro[indice] = this.proximoJogador;
      this.proximoJogador = this.proximoJogador === 'X' ? 'O' : 'X';
       
      this.posicao = indice;
      console.log('posicao: ', this.posicao, 'jogada: ', this.tabuleiro[indice])

    }
  }
}
