//&& Lógica “and” ou “e”, que retorna verdadeiro se todos os operandos forem verdadeiros.
//|| Lógica “or” ou “ou”, que retorna verdadeiro se pelo menos um operando for verdadeiro.
//! Lógica “not” ou “não”, que inverte o valor lógicose é verdadeiro, retorna falso e se é falso retorna verdadeiro.


let dinheiros= 1500 //2000
let sol= false //sol
let praia = dinheiros >= 2000 &&  sol == true // true
// let praia = dinheiros >= 200 && sol == true | Operador "&" (true)
let praa = dinheiros >= 2000 || sol == true
console.log(`vamos para a praia?' ${!praia}`);

