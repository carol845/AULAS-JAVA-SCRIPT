// peça um numero ao usuário e mostre a tabuada dele a 1 a 10 usando o laço for.
// let numerero = Number(prompt("8"));

let num= Number(prompt(`Digite um número: `))

for (let contador = 1 ; contador <= 10; contador++) {
    console.log(`${num} x ${contador} = ${num * contador}`);
}