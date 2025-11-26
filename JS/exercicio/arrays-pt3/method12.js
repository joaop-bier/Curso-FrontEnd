/*

Exercício 12 — pop()

Crie um array com 5 números.
Remova o último número usando pop() e mostre o número removido e o array final.

*/

const numbers = [1,2,3,4,5]
console.log("Array original: " + numbers)
const numberRemove = numbers.pop()


console.log("último valor removido do array: " + numberRemove)
console.log("Array depois de ser modificado: " + numbers)
