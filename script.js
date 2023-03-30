function Tikla(element) {
  element.innerText = "CV downloaded";
  element.style.color = "green";
}

function RenkDegistir() {
  var element = document.getElementById("btn1");

  element.style.color = "red";
}

function inputAl() {
  var element = document.getElementById("input1");

  alert(element.value);
}
