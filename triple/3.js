
function carregar(darErro) {
  return new Promise((resolve, reject) => {
    if (darErro) {
      reject("Falha!");
    } else {
      resolve("OK!");
    }
  });
}

async function executar() {
  try {
    const resultado = await carregar(false);  //Se o dar erro for false, ele funciona normalmente
    console.log("Resultado:", resultado);
  } catch (erro) {
    console.log("Erro ao carregar:", erro);
  }
}

// Chamando a função
executar();
