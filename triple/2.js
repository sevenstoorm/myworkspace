function cadastrarUsuario(nome) {
  if (nome.length < 3) {
    throw new Error("Nome muito curto");
  }
  return `Usuário cadastrado: ${nome}`;
}

// Uso
try { //caso 1
  const nome = "Roberto"; // ou pode colocar outro
  const resultado = cadastrarUsuario(nome);
  console.log(resultado);
} catch (err) {
  console.log(`Erro: ${err.message}`);
}

try { //caso 2
  const nome = "Ana"; // Nome curto
  const resultado = cadastrarUsuario(nome);
  console.log(resultado);
} catch (err) {
  console.log(`Erro: ${err.message}`);
}
