const button = document.getElementById("botao")
const titulo = document.getElementById("Titulo")
const body = document.body;

botao.addEventListener("click", () => {
  if (body.classList.contains("claro")){
    body.classList.replace("claro", "escuro");
    titulo.textContent = "modo escuro";
    botao.textContent = "ativa modo claro";
  } else {
    body.classList.replace("escuro", "claro");
    titulo.textContent = "modo claro";
    botao.textContent = "ativa modo escuro"
  }
});