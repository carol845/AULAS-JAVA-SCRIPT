onsole.log('Jovem pode votar? ');

const voto = 16;
let idade =16

if (idade >=16 && idade < 70) {
    console.log('Pessoa,pode votar!');// testa a pimeira
} else if (idade > 70) { // se,não
    console.log('Voto Optativo!');
} else {
    console.log('Não pode votar!');
}

if ( idade >=voto) {  //se/ premissa
    console.log ('Pode votar!');
} else {  //senão
console.log ('Jovem, não pode votar!');
}
console.log('FIM');
