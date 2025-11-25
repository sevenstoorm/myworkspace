// Operações assíncronas
function operacao1() { //funcao op1
  return new Promise(resolve => { //new promise 
    setTimeout(() => resolve("Resultado da operação 1"), 1000); //funcao de resolução
  });
}

function operacao2() { //op2 
  return new Promise(resolve => {
    setTimeout(() => resolve("Resultado da operação 2"), 2000);
  });
}

function operacao3() { //op3
  return new Promise(resolve => {
    setTimeout(() => resolve("Resultado da operação 3"), 1500);
  });
}

// Todas em paralelo
async function executarOperacoes() {
  const resultados = await Promise.all([ //Espera todas as promessas serem resolvidas
    operacao1(),
    operacao2(),
    operacao3()
  ]);

  console.log(`Resultados: ${resultados.join(", ")}`); //Exibe os resultados
}

executarOperacoes(); //Chama a funcao para executar as operacoes
