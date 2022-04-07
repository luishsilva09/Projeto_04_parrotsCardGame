let nCartas = 0;
while ( nCartas < 4 || nCartas%2 !== 0 || nCartas > 14){
   nCartas = prompt("Qual o numero de cartas? ");
}
for(let i =nCartas; i > 0;i--){
   let cartas = document.querySelector(".cartas");
   cartas.innerHTML += `
      <div class="carta-front">
         <img src="images/front.png ">
      </div>`
   
}