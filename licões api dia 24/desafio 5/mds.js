let ladoA = parseFloat(prompt("Digite o valor do lado A do triângulo:"));
let ladoB = parseFloat(prompt("Digite o valor do lado B do triângulo:"));
let ladoC = parseFloat(prompt("Digite o valor do lado C do triângulo:"));

let testepositivo = (a, b, c) => { //Condição para ver se todos os lados são positivos
    return(a > 0 && b > 0 && c > 0)
};

const etriangulo = (a, b, c) => { //Condição para ver se é triângulo
    return ( a < b + c && b < a + c && c < a + b);
}

const tipotriangulo = (a, b, c) => { //Função para definir o tipo de triângulo
    if(a === b && b === c){
        return "Equilátero"; //Todos os lados iguais
    }else if(a === b || b === c || a === c){
        return "Isósceles"; //Dois lados iguais
    } else {
        return "Escaleno"; //Todos os lados diferentes
    };
};


//Saída de dados
if(!testepositivo(ladoA, ladoB, ladoC)){ //Se for diferente da função testepositivo
    alert("Os valores dos lados devem ser positivos.");
    console.log("Os valores dos lados devem ser positivos."); 
}else if (!etriangulo(ladoA, ladoB, ladoC)){ //Se for diferente da função etriangulo
    alert("Os valores fornecidos não formam um triângulo.");
    console.log("Os valores fornecidos não formam um triângulo.");
}else{ //Se passar nas duas condições anteriores
    let tipo = tipotriangulo(ladoA, ladoB, ladoC);
    alert(`O triângulo é do tipo: ${tipo}`);
    console.log(`O triângulo é do tipo: ${tipo}`);
};