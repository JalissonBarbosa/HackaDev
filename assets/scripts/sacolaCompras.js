//elementos
const botaoAbrirSacola = document.getElementsByClassName("btn");

const body = document.body;

const itensSacola = document.getElementsByClassName("itemSacola");

let botaoFecharSacola = document.getElementById("fecharSacola");

const botaoVoltaraComprar = document.getElementById("voltarCompras");
const sacola = document.getElementById("sacola");

const limparSacola = document.getElementById("limparSacola");

//eventos
botaoFecharSacola.addEventListener("click", fecharSacola);
botaoAbrirSacola.addEventListener("click", abrirSacola);
limparSacola.addEventListener("click", removerTodosOsItens);
botaoVoltaraComprar.addEventListener("click", fecharSacola);

//funções
function fecharSacola() {
  sacola.classList.remove("visivel");
  body.classList.remove("fixed");
}
function abrirSacola() {
  sacola.classList.add("visivel");
  body.classList.add("fixed");
}
function removerTodosOsItens() {
  const quantItens = itensSacola.length;
  for (let i = 0; i < quantItens; i++) {
    itensSacola[0].remove();
  }
  sacola.classList.add("vazia");
}
