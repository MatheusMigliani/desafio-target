const dados = require("./dados.json"); // Carregando o JSON

let faturamento = dados.filter((d) => d.valor > 0).map((d) => d.valor);
let menor = Math.min(...faturamento);
let maior = Math.max(...faturamento);
let media = faturamento.reduce((a, b) => a + b, 0) / faturamento.length;
let diasAcimaDaMedia = faturamento.filter((v) => v > media).length;

console.log(`Menor valor de faturamento: ${menor}`);
console.log(`Maior valor de faturamento: ${maior}`);
console.log(
  `Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`
);
