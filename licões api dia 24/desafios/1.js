let tempF = parseFloat(prompt("Digite a temperatura em Fahrenheit:"));
while (tempF >= 212){
    console.log("A temperatura em Fahrenheit é muito alta. Digite um valor menor que 212.");
    alert("A temperatura em Fahrenheit é muito alta. Digite um valor menor que 212.");
    parseInt(prompt("Digite a temperatura em Fahrenheit:"));
}

function fahrenheitParaCelsius(tempF) {
    let tempC = (tempF - 32) * 5 / 9;
    return tempC;
};
console.log("A temperatura em Celsius é: " + fahrenheitParaCelsius (tempF).toFixed(2) + "°C");
alert("A temperatura em Celsius é: " + fahrenheitParaCelsius (tempF).toFixed(2) + "°C");