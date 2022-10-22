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


function virar(){
    this.classList.add("virada");
}


(function embaralhar() {

    cartas.forEach(carta => {
 
      let ramdomPos = Math.floor(Math.random() * 14);
 
      carta.style.order = ramdomPos;
 
    });
 
  })();

cartas.forEach(carta => { carta.addEventListener('click', virar)
});