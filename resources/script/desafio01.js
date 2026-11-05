const numero = document.getElementById("numero");

const incrementar = document.getElementById("incrementar");
const decrementar = document.getElementById("decrementar");

let contador = 0;
incrementar.addEventListener("click", function() {

    contador++;

    numero.textContent = contador;
});
decrementar.addEventListener("click", function() {

    contador--;

    numero.textContent = contador;
});