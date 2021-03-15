var button = document.getElementById("button"),
  caja = document.getElementById("caja"),
  contador = 0;

function cambiar() {
  if (contador == 0) {
    caja.classList.add("black");
    contador = 1;
  } else {
    caja.classList.remove("black");
    contador = 0;
  }
}

button.addEventListener("click", cambiar, true);
