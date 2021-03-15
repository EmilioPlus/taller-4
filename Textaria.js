var areaTexto = document.getElementById("areaTexto");
var contador = document.getElementById("contador");

areaTexto.oninput = function () {
  var amount = areaTexto.value.length;
  contador.innerHTML = amount;
};
