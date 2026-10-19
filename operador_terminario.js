//operador unario | 1 elemento
//operador binario | 2 elementos
//operador ternario | 3 elementos

let nome = "Caroline Simoes" // string
let idade = 20 // Number
let matriculado = true // Bolean
let nota = 7.5

// typeof - testa o tipo de dado que tenho na variavel

console.log(nome);
console.log(`Tipo de dado: ${typeof nome}`);
console.log(`=========================`);

console.log(idade);
console.log(`Tipo de dado: ${typeof idade}`);
console.log(`=========================`);

console.log(matriculado);
console.log(`Tipo de dado: ${typeof matriculado}`);
console.log(`=========================`);

//operador binario | 2 elementos

let curso = idade >= 15 && nota >= 6
console.log(`Aluno Aprovado para o curso: ${curso}`);


//operador ternario | 3 elementos
let valor = 2500
// Valor minimo - 2000
// teste ? verdadeiro | falso 
let resposta = valor >= 2000 ? "Vou a praia" : "Vou ficar em casa"

console.log(resposta);
