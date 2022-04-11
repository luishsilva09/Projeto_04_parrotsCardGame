let nCartas = 0;
let acertos = 0;
let cartasViradas = [];
let nJogadas = 0;
let cartasBack = []
let seg = 0;
let min = 0;

const images = [
   "./images/explodyparrot.gif",
   "./images/bobrossparrot.gif",
   "./images/fiestaparrot.gif",
   "./images/metalparrot.gif",
   "./images/revertitparrot.gif",
   "./images/tripletsparrot.gif",
   "./images/unicornparrot.gif"]

images.sort(comparador);
function comparador() {
   return Math.random() - 0.5;
}

// inicia o jogo pedindo a quantidade de cartas
function iniciarjogo() {
   nCartas = prompt("Qual o numero de cartas? Apenas numeros pares de (4 ~ 14)");
   while (nCartas < 4 || nCartas % 2 !== 0 || nCartas > 14) {
      nCartas = prompt("Qual o numero de cartas? ");
   }
   
   adicionarCartas()
}
//faço com que a carta clicada vira 
function clickCarta(element) {
   cartasViradas.push(element)
   nJogadas++
   if (cartasViradas.length < 3) {
      element.classList.add("flip")

      if (cartasViradas.length === 2) {
         segundoClique(element);
      }

   }

}
//na segunda carta virada cada variavel recebe o elemento para fazer a comparação
function segundoClique(element) {
   let carta1 = cartasViradas[0].querySelector('.back').getAttribute("src")
   let carta2 = cartasViradas[1].querySelector('.back').getAttribute("src")
   match(carta1, carta2)

}


//faz a comparação dos dois elementos 
function match(carta1, carta2) {
   if (carta1 === carta2) {
      cartasViradas = []
      acertos++

      if (acertos === nCartas / 2) {

         setTimeout(fimJogo, 100)
      }
   } else {
      setTimeout(desvirar, 1000)
   }
}
//desvira as cartas caso seja diferente uma da outra
function desvirar() {
   cartasViradas[0].classList.remove("flip")
   cartasViradas[1].classList.remove("flip")
   cartasViradas = []
}



// faço a adição de forma randomica das cartas 
function adicionarCartas() {
   let cont = 0
   for (let i = nCartas / 2; i > 0; i--) {
      cartasBack.push(images[i])
      cartasBack.push(images[i])
      cartasBack.sort(comparador)

   }

   for (let i = nCartas; i > 0; i--) {
      let cartas = document.querySelector(".jogo-memoria");
      cartas.innerHTML += `
      <div class="carta" onclick="clickCarta(this)">   
         <div class="carta-front">   
            <img  src="./images/front.png " >
         </div>
         <div class="carta-back">
            <img  class="back" src="${cartasBack[cont]}" >
         </div>
      </div>`
      cont++
   }
   setInterval(timer,1000)
}
//pergunta se o usuario gostaria de jogar novamente
function fimJogo() {
   document.querySelector(".jogo-memoria").innerHTML = ''

   alert(`Você ganhou em ${nJogadas} jogadas.`);
   let reinicia = prompt("gostaria de reiniciar a partida 'sim' ou 'não'");

   if (reinicia === "sim") {
      nJogadas = 0
      cartasBack = []
      cartasViradas = []
      acertos = 0
      seg = 0
      min = 0
      iniciarjogo()
   } else {
      document.querySelector(".jogo-memoria").innerHTML = '<h1>Obrigado por jogar</h1>'
      document.querySelector(".timer").classList.add("esconde")
   }
}
// cronometro
function timer() {

   seg++
   if (seg < 10) {
      document.querySelector(".timer .segundos").innerHTML = "0" + seg
   }
   if (seg >= 10) {
      document.querySelector(".timer .segundos").innerHTML = seg
   }
   if (seg === 59) {
      seg = 0
      min++
      if (min < 10) {
         document.querySelector(".timer .minutos").innerHTML = "0" + min
      } if (min >=10) {
         document.querySelector(".timer .minutos").innerHTML = "0" + min
      }else{
         min =0
      }
   }


}

iniciarjogo()
