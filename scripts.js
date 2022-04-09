let nCartas = 0;
const cartasBack = [
   "./images/explodyparrot.gif",
   "./images/bobrossparrot.gif",
   "./images/fiestaparrot.gif",
   "./images/metalparrot.gif",
   "./images/revertitparrot.gif",
   "./images/tripletsparrot.gif",
   "./images/unicornparrot.gif"]

cartasBack.sort(comparador);
function comparador() {
   return Math.random() - 0.5;
}

let cartasViradas = []
function clickCarta(element) {
   cartasViradas.push(element)

   if (cartasViradas.length < 3) {
      element.classList.add("flip")

      if (cartasViradas.length === 2) {
         segundoClique(element);
      }

   }

}

function segundoClique(element) {
   console.log(cartasViradas)
   let carta1 = cartasViradas[0].querySelector('.back').getAttribute("src")
   let carta2 = cartasViradas[1].querySelector('.back').getAttribute("src")
   console.log(carta1)
   console.log(carta2)
   console.log(cartasViradas)
   match(carta1, carta2)

}

function desvirar() {
   cartasViradas[0].classList.remove("flip")
   cartasViradas[1].classList.remove("flip")
   cartasViradas = []
   console.log(cartasViradas)

}

function match(carta1, carta2) {
   if (carta1 === carta2) {
      cartasViradas = []
   } else {
      setTimeout(desvirar, 1000)
   }
}


function iniciarjogo() {
   nCartas = prompt("Qual o numero de cartas? ");
   while (nCartas < 4 || nCartas % 2 !== 0 || nCartas > 14) {
      nCartas = prompt("Qual o numero de cartas? ");
   }
   adicionarCartas()
}


function adicionarCartas() {
   for (let i = nCartas / 2; i > 0; i--) {
      let cartas = document.querySelector(".jogo-memoria");
      cartas.innerHTML += `
      <div class="carta" onclick="clickCarta(this)">   
         <div class="carta-front">   
            <img  src="./images/front.png " >
         </div>
         <div class="carta-back">
            <img  class="back" src="${cartasBack[i]}" >
         </div>
      </div>`

   }
   for (let i = nCartas / 2; i > 0; i--) {
      let cartas = document.querySelector(".jogo-memoria");
      cartas.innerHTML += `
      <div class="carta" onclick="clickCarta(this)">   
         <div class="carta-front">   
            <img  src="./images/front.png " >
         </div>
         <div class="carta-back">
            <img  class=" back"src="${cartasBack[i]}" >
         </div>
      </div>`
   }
}
iniciarjogo()
