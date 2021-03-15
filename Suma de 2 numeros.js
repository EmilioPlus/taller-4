function pluss() {
  var Number1 = parseInt(document.getElementById("Num1").value);
  var Number2 = parseInt(document.getElementById("Num2").value);
  var Result;
  Result = Number1 + Number2;

  document.getElementById("Result").value = Result;
}
