// lista de palavras
const listaSujeito = [
  "Elephant",
  "giraffe",
  "Neymar",
  "lion",
  "bird",
  "fish",
  "dog",
  "turtle",
  "Michael Jackson",
  "spongebob",
  "batman",
  "spider-man",
  "superman",
  "iron-man",
  "Captain America",
  "Wonder Woman",
  "Black Panther",
];
const listaAcao = [
  "Run",
  "kick",
  "break",
  "talk",
  "fly",
  "play",
  "fight",
  "jump",
  "fishing",
  "travel",
  "record",
  "sell",
  "teach",
  "hear",
  "drink",
  "go up",
  "think",
  "send",
  "walk",
];
const listaObjetos = [
  "Pen",
  "clock",
  "bottle",
  "bike",
  "table",
  "roof",
  "socket",
  "lamp",
  "chair",
  "bag",
  "guitar",
  "piano",
  "ball",
  "door",
  "window",
  "soup",
  "cell",
  "traffic cone",
  "wheels",
  "helicopter",
  "parachute",
];

const btn = document.querySelector("#btn");
const selectCard = document.querySelector("#selectCard");

const outSuj = document.querySelector("#outSuj output");
const outAcao = document.querySelector("#outAcao output");
const outObj = document.querySelector("#outObj output");

// sorteio
btn.addEventListener("click", () => {
  const randomSuj = Math.floor(Math.random() * listaSujeito.length);
  const randomAcao = Math.floor(Math.random() * listaAcao.length);
  const randomObj = Math.floor(Math.random() * listaObjetos.length);

  outSuj.innerHTML = listaSujeito[randomSuj];
  outAcao.innerHTML = listaAcao[randomAcao];
  outObj.innerHTML = listaObjetos[randomObj];

  const cardType = selectCard.options[selectCard.selectedIndex].text;

  if (cardType == "person") {
  }
  switch (cardType) {
    case "Sentence":
      document.querySelector("#outSuj").style.display = "grid";
      document.querySelector("#outAcao").style.display = "grid";
      document.querySelector("#outObj").style.display = "grid";
      break;
    case "Person":
      document.querySelector("#outSuj").style.display = "grid";
      document.querySelector("#outAcao").style.display = "none";
      document.querySelector("#outObj").style.display = "none";
      break;
    case "Action":
      document.querySelector("#outSuj").style.display = "none";
      document.querySelector("#outAcao").style.display = "grid";
      document.querySelector("#outObj").style.display = "none";
      break;
    case "Object":
      document.querySelector("#outSuj").style.display = "none";
      document.querySelector("#outAcao").style.display = "none";
      document.querySelector("#outObj").style.display = "grid";
      break;
  }
});
