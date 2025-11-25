function  DadosCarregados() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Dados carregados");
        }, 1500);
    });
}

async function AguardandoDados() {
    console.log("Iniciando carregamento…")
    const recebendo = await DadosCarregados();
    console.log(recebendo)
    console.log("Carregamento concluído!")
}

AguardandoDados()