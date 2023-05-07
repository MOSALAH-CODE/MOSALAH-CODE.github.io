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

function creatImage(src) {
  const image = document.createElement("img");
  image.src = src;
  return image;
}

const modalView = document.querySelector("#modal-view");
modalView.addEventListener("click", onModalClick);

function onModalClick(event) {
  modalView.classList.remove("no-scroll");
  modalView.classList.add("hidden");
  modalView.innerHTML = "";
}

function onClick(event) {
  const image = creatImage(event.currentTarget.src);
  console.log(image);
  modalView.appendChild(image);
  modalView.classList.add("no-scroll");
  modalView.classList.remove("hidden");
}

const albumView = document.querySelector("#album-view");

for (let i = 0; i < PHOTO_LIST.length; i++) {
  const photoSrc = PHOTO_LIST[i];
  const image = creatImage(photoSrc);
  image.addEventListener("click", onClick);
  albumView.appendChild(image);
}
