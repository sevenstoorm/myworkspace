async function carregarDados(passo) {
    
    const resultado = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`carregamento ${passo} concluÃdo.`);
        }, 1500);
    });
    console.log(resultado);
}

async function executarSequencia() {
    console.log(`iniciando o dowload:`);
    await carregarDados(1); 
    await carregarDados(2); 
    await carregarDados(3);     
    
    console.log('dowload completo.');
}

executarSequencia();