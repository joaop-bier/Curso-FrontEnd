/*

Exercício 17 — combinações

Crie um array com 4 cidades.

Adicione uma cidade no final (push)

Adicione uma cidade no começo (unshift)

Remova a primeira cidade (shift)

Remova a última cidade (pop)
Mostre o array final no console.

*/

const city = ["São Paulo", "Curitiba", "Rio de Janeiro", "Santa Catarina"]
console.log("Array original: " + city)

city.push("Londrina")
city.unshift("Guaratuba")

console.log("Array depois de adicionar 2 cidade: " + city)

city.shift()
city.pop()

console.log("Cidades adicionadas removidas: " + city)