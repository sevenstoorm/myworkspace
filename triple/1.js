function dividir(a, b) {
  if (b === 0) {
    throw new Error("Não é possível dividir por zero!");
  }
  return a / b;
}

try { 
  const a = 10;
  const b = 2;
  const resultado = dividir(a, b);
  console.log(`Divisão: ${a} / ${b} = ${resultado}`);
} catch (err) {
  console.log(`Erro: ${err.message}`);
}

try {
  const a = 10;
  const b = 0;
  const resultado = dividir(a, b);
  console.log(`Divisão: ${a} / ${b} = ${resultado}`);
} catch (err) {
  console.log(`Erro: ${err.message}`);
}
