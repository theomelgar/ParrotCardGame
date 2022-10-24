let quantidadeCartas = Number(prompt('Quntas cartas?(4-14)'));

let versos = ['bobross','explody','fiesta', 'metal', 'revertit','triplets','unicorn'];
versos.sort(comparador); // Após esta linha, a minhaArray estará embaralhada

while ( quantidadeCartas & 1){
    quantidadeCartas = Number(prompt('Quntos pares de cartas?(4-14)'));
}

while((quantidadeCartas/2) < 2 || (quantidadeCartas/2) > 7){
    quantidadeCartas = Number(prompt('Quntos pares de cartas?(4-14)'));
} 


let posicaoCarta = document.querySelector('.jogo');

let contador = 0;



// Esta função pode ficar separada do código acima, onde você preferir
function comparador() { 
    return Math.random() - 0.5; 
}

while((quantidadeCartas/2) > contador){
    posicaoCarta.innerHTML += `
    <div class="carta" data-cartinha="${versos[contador]}">
        <img class="verso" src="imagens/back.png">
        <img class="frente " src="cartas/${versos[contador]}parrot.gif">
    </div>
    <div class="carta" data-cartinha="${versos[contador]}">
        <img class="verso" src="imagens/back.png">
        <img class="frente " src="cartas/${versos[contador]}parrot.gif">
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
let tempoPassado = 0;
let repete = true;

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

    if (primeiraCarta.dataset.cartinha === segundaCarta.dataset.cartinha) {

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

    setTimeout(removeVirada, 1000);

}

function removeVirada(){
    primeiraCarta.classList.remove('virada');
    segundaCarta.classList.remove('virada');
    resetCartas();
}

function resetCartas() {
    
    cartaVirada = false;
    inibidor =  false;
    primeiraCarta = null;
    segundaCarta = null;

}


function embaralhar() {
    contador = 0;
    while (contador < cartas.length){
        let ramdomPos = Math.floor(Math.random() * 14);
        let carta = cartas[contador];
        carta.style.order = ramdomPos;
        carta.addEventListener('click', virar);
        contador++;
    }
}


function ganhou(){
    alert(`Você ganhou em ${tempoPassado} segundos, com ${jogadas} jogadas!`);
    reiniciar();
}

function cronometro(){
    if (repete === false){
        return;
    }
    timer = document.querySelector('.timer');
    tempoPassado++;
    timer.innerHTML = `Tempo : ${tempoPassado}`;
}


function reiniciar(){
while (repete){
    let decisao = prompt("Gostaria de jogar de novo?");
    if(decisao === "sim"){
        repete = false;
        location.reload();
        return;
    }
    else if(decisao === "não" ){
        repete = false;
        return;
    }
    else{
        repete= true;
    }
}
    
}
embaralhar();
setInterval(cronometro,1000);