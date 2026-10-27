// 2 - DO-WHILE

let soma = 0;
let numero;

do {
    numero = Number(prompt(`Introduza um número (ou 0 para sair):`));
    soma += numero;
} while (numero !== 0);

alert(`A soma de todos os números é: ${soma}`);