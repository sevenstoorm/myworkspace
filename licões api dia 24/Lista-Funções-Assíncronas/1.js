function msng() {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve("Mensagem carregada com sucesso👌👌")
        }, 1000);
    });
}
async function aguardando() {
    console.log("aguardando Mensagem...")
    const Mensagem = await msng();
    console.log(Mensagem)
}

aguardando()