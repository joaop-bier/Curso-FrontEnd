/*

Exercício 8 — todas as funções

Crie um array com 5 elementos à sua escolha.

Adicione 2 elementos no final (push)

Adicione 1 elemento no começo (unshift)

Remova o último elemento (pop)

Remova o primeiro elemento (shift)

Use slice() para pegar os 3 elementos do meio

Use splice() para substituir o segundo elemento do array resultante
Mostre todos os passos e resultados no console.

*/

const elements = ["Água", "Fogo", "Terra", "Ar", "Luz"]
console.log("Array original: " + elements)

elements.push("Som", "Vento")
elements.unshift("Raio")

console.log("Array alterada: " + elements)

elements.pop()
elements.shift()


console.log("Array alterada denovo: " + elements)
console.log(elements.slice(3,5))

elements.splice(1,1,"Gelo")

console.log(elements)