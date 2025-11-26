/*

Exercício 16 — splice()

Crie um array com 5 números.
Use splice() para remover o segundo e o terceiro número e adicionar dois novos números no lugar. Mostre o array final no console.

*/

const numbers = [1,2,3,4,5]
numbers.splice(1,2,22,33)

console.log(numbers)