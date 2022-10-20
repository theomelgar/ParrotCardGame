const numeroCartas = [];

const quantidadeCartas = Number(prompt('Quntos pares de cartas?'));

let contador = 0;
while (quantidadeCartas > contador){
    numeroCartas.push();
    contador ++;
}

const posicaoCarta = document.querySelector('.jogo');

contador = 0 ;

while(quantidadeCartas > contador){
    posicaoCarta.innerHTML += `
    <div class="carta">
    <img src="imagens/back.png">
    </div>
    `;

    contador ++;
}