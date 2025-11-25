let soma = 0; // Soma das notas
let spond = 0; // Soma ponderada
let spes = 0; // Soma dos pesos
let pes = [5, 3, 2]; // Pesos das notas

let resposta = prompt("Digite 'P' para calcular a média ponderada ou 'A' para calcular a média normal: ");

if (resposta.toUpperCase() === 'P') {
    // ===== Média ponderada =====
    for (let i = 0; i < 3; i++) {
        let nota = parseFloat(prompt("Digite a nota " + (i + 1) + ":"));

        if (nota < 0 || nota > 10 || isNaN(nota)) { //Condição de validação;
            alert("Nota inválida! Digite uma nota entre 0 e 10.");
            console.log("Nota inválida! Digite uma nota entre 0 e 10.");
            i--; // repete a mesma nota
        } else {
            spond += nota * pes[i]; // soma ponderada (nota × peso)
            spes += pes[i]; // soma dos pesos
        }
    }

    let mediaPond = spond / spes; //media ponderada
    alert("A média ponderada do aluno é: " + mediaPond.toFixed(2));
    console.log("A média ponderada do aluno é:", mediaPond.toFixed(2));

} else if (resposta.toUpperCase() === 'A') {
    // ===== Média normal =====
    for (let i = 0; i < 3; i++) {
        let nota = parseFloat(prompt("Digite a nota " + (i + 1) + ":")); //Nota 1, Nota 2, Nota 3;

        if (nota < 0 || nota > 10 || isNaN(nota)) { //condição de validação;
            alert("Nota inválida! Digite uma nota entre 0 e 10.");
            console.log("Nota inválida! Digite uma nota entre 0 e 10.");
            i--; // repete a mesma nota
        } else {
            soma += nota; // soma simples das notas
        }
    }

    let media = soma / 3; //media normal
    alert("A média normal do aluno é: " + media.toFixed(2));
    console.log("A média normal do aluno é:", media.toFixed(2));

} else {
    alert("Opção inválida! Digite apenas 'P' ou 'A'."); //Se a pessoa digitar outra coisa além de P ou A;
    console.log("Opção inválida! Digite apenas 'P' ou 'A'.");
}
