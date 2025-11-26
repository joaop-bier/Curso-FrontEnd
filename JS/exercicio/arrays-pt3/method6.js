/*

Exercício 6 — concat()

Crie dois arrays: um com frutas e outro com verduras. Use concat() para criar um novo array chamado alimentos que junte os dois arrays. Mostre o resultado no console.

*/

const frutas = ["Banana", "Morango", "Uva"]
const verduras = ["Alface", "Tomate", "Couve Flor"]

const alimentos = frutas.concat(verduras, "Blocolis")

console.log(alimentos)