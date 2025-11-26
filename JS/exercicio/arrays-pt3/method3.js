/*

Exercício 3 — filter() e map()

Crie um array com idades de várias pessoas.
Use filter() para criar um novo array só com as idades maiores ou iguais a 18.
Depois, use map() para transformar esse novo array em mensagens do tipo:
"Pessoa com [idade] anos pode dirigir."

*/

let yearUsers = [12,22,32,18,19]

let maiorQue18 = yearUsers.filter(function(el){
    return el >= 18
})

let verifDirigir = maiorQue18.map(function(el){
    return `Pessoa com ${el} anos pode dirigir`
})

console.log(verifDirigir)
