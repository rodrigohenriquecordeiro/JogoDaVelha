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
      console.log(this.verificaSeVenceu(this.tabuleiro));
    }
  }

 verificaSeVenceu(tabuleiro: string[]): string {
    const linhasVitoria = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], 
      [0, 3, 6], [1, 4, 7], [2, 5, 8], 
      [0, 4, 8], [2, 4, 6]            
    ];

    for (let i = 0; i < linhasVitoria.length; i++) {
      const [a, b, c] = linhasVitoria[i];
      
      if (
        tabuleiro[a] && 
        tabuleiro[a] === tabuleiro[b] && 
        tabuleiro[a] === tabuleiro[c]
      ) {
        return `${tabuleiro[a]} venceu a partida`;
      }
    }

    const tabuleiroCheio = !tabuleiro.includes('');
    if (tabuleiroCheio) {
      return 'Deu Velha';
    }

    return 'Ninguém venceu ainda';
  }
  
}
