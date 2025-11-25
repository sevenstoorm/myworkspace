//função main
async function msg(){
	console.log("Iniciando...");

	//rodar o programa duas vezes
	const [a, b] = await Promise.all([
		tempoDeEsperaA = gerarTempo(1000,3000),
		tempoDeEsperaB = gerarTempo(1000,3000)
	])

	//printar o resultado do A e do B
	setTimeout(() => {
		console.log("Pronto!: A - ", a)
	}, tempoDeEsperaA);

	setTimeout(() => {
		console.log("Pronto!: B - ", b)
	}, tempoDeEsperaB);


	//verificador do A e do B entre si. EX: cado o A seja maior do que o B a conta sera "A - B = diferenca"
	if (a>b){ 
		diferenca = a - b 
		setTimeout(() => {
			console.log(`Eles tem uma diferaça de ${diferenca} - O A é maior`)
		}, 3100);
	} else if (b>a){ 
		diferenca = b - a 
		setTimeout(() => {
			console.log(`Eles tem uma diferaça de ${diferenca} - O B é maior`)
		}, 3100);

	} else { 
		setTimeout(() => {
			console.log("Não a diferença entre eles - A = B") 
		}, 3100);
	}
}

//função para fazer a escolha aleatoria entre 1 a 3 segundos
function gerarTempo(min,max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

msg()
