const titulo = document.getElementById("titulo");
const imagem = document.getElementById("imagem");
const descricao = document.getElementById("descricao");

document.getElementById("btnPraia").addEventListener("click", () => {
    titulo.textContent = "Você escolheu: Praia";
    imagem.src = "./assets/praia.jpg";
    descricao.textContent = "Você está em uma praia legal";
});

document.getElementById("btnMonta").addEventListener("click", () => {
    titulo.textContent = "Você escolheu: Montanha";
    imagem.src = "./assets/montanha.jpg"; 
    descricao.textContent = "Você está em uma montanha tranquila";
});

document.getElementById("btnCida").addEventListener("click", () => {
    titulo.textContent = "Você escolheu: Cidade";
    imagem.src = "./assets/cidade.jpg";
    descricao.textContent = "Você está em uma cidade movimentada";
});
