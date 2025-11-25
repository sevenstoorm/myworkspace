const botaoToggle = document.getElementById('botao-toggle'); // Seleciona o botão pelo ID
const info = document.getElementById('info'); // Seleciona a div de informações pelo ID
const contadorP = document.getElementById('contador'); // Seleciona o parágrafo do contador pelo ID

let contador = 0; // Inicializa o contador

function toggleInfo() { // Função para alternar a visibilidade das informações
  info.classList.toggle('oculto'); // Adiciona ou remove a classe 'oculto'
  const estav = !info.classList.contains('oculto'); // Verifica se as informações estão visíveis
 
  if (estav) { // Se as informações estão visíveis
    botaoToggle.textContent = 'Esconder informações ';

    contador++; // Incrementa o contador
    contadorP.textContent = "Número de vezes que as informações foram mostradas: " + contador; // Atualiza o texto do contador

  } else { // Se as informações estão ocultas
    botaoToggle.textContent = 'Mostrar informações '; // Atualiza o texto do botão
  }
}

botaoToggle.addEventListener('click', toggleInfo); // Adiciona o evento de clique ao botão para alternar as informações