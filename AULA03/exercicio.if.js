let idade = 25
if (idade < 18) {
  console.log(`Voce tem ${idade} anos, você é menor de idade`);
} else if (idade>18 && idade <60) {
  console.log(`Voce tem $ {idade} anos, voce já é adulto`);
} else {
  console.log(`Voce tem $ {idade} anos, voce já é idoso`);
}

//exercicio 6
let Idade2=17

if (Idade2 >= 18) {
  console.log(`Voce pode dirigir.`)
} else{
  console.log(`voce ainda`)
}

//exercicio7
let numero = -5

if (numero >0) {
  console.log (`o numero {numero} e positivo`)
} else if (numero <0) {
console.log(`o numero {numero} e negativo`);
}else{
  console.log(`o numero ${numero} e zero`)
}

// exercicio8

let altura= 1.70;
let peso=70

let imc = peso/ altura * altura

console.log('Sua altura: $ {altura}m');
console.log('Sua peso: $ {peso}kg');
console.log('Seu imc é $ {imc.tofixed(2)}');

if (imc >=18.5 && imc <=24,9){
  console.log ('seu IMC esta dentro do intervalo saudavel!');
} else{
  console.log('sei IMC não esta dentro do intervalo');
}
