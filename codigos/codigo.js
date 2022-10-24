let quantidadeCartas = Number(prompt('Quntas cartas?(4-14)'));

let versos = ['bobross','explody','fiesta', 'metal', 'revertit','triplets','unicorn'];

while ( quantidadeCartas & 1){
    quantidadeCartas = Number(prompt('Quntos pares de cartas?(4-14)'));
}

while((quantidadeCartas/2) < 2 || (quantidadeCartas/2) > 7){
    quantidadeCartas = Number(prompt('Quntos pares de cartas?(4-14)'));
} 


let posicaoCarta = document.querySelector('.jogo');

let contador = 0;

while((quantidadeCartas/2) > contador){
    posicaoCarta.innerHTML += `
    <div class="carta" data-framework="${versos[contador]}">
        <img class="verso" src="/imagens/back.png">
        <img class="frente " src="/cartas/${versos[contador]}parrot.gif">
    </div>
    <div class="carta" data-framework="${versos[contador]}">
        <img class="verso" src="/imagens/back.png">
        <img class="frente " src="/cartas/${versos[contador]}parrot.gif">
    </div>
    `;

    contador ++;
}
  
const cartas = document.querySelectorAll(".carta");

let corretas = 0;
let jogadas = 1;
let cartaVirada = false;
let primeiraCarta, segundaCarta;
let inibidor = false;

function virar() {
    if (inibidor){
        return;
    }

    if (this === primeiraCarta){
        return;
    } 

    this.classList.add('virada');

    if (!cartaVirada) {
        cartaVirada = true;
        primeiraCarta = this;
        jogadas++;
        return;
    }
    segundaCarta = this;

    formaPar();
    jogadas++;
}


function formaPar() {

    if (primeiraCarta.dataset.framework === segundaCarta.dataset.framework) {

        desativarCarta();
        corretas++;
        if (corretas === (quantidadeCartas/2)){
            ganhou();
            return;
        }
        return;

    }
    desvirar();

}


function desativarCarta() {

    primeiraCarta.removeEventListener('click', virar);

    segundaCarta.removeEventListener('click', virar);

    resetCartas();
}


function desvirar() {
    inibidor = true;

    setTimeout(() => {
        primeiraCarta.classList.remove('virada');
        segundaCarta.classList.remove('virada');

        resetCartas();
    }, 1000);

}

function resetCartas() {
    
    cartaVirada = false;
    inibidor =  false;
    primeiraCarta = null;
    segundaCarta = null;

  }
 

(function embaralhar() {

    cartas.forEach(carta => {
 
        let ramdomPos = Math.floor(Math.random() * 14);
 
        carta.style.order = ramdomPos;
 
    });
 
})();

cartas.forEach(carta => { 
    carta.addEventListener('click', virar);
});

function click(){
    jogadas++;
    return jogadas;
}

function ganhou(){
    alert(`Você ganhou em ${jogadas} jogadas!`);
}