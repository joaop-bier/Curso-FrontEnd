/*

Exercício 9 — concat() + join()

Crie dois arrays de cores (cores1 e cores2).

Una os dois arrays com concat().

Transforme o resultado em uma string usando join() com o separador " | ".

Mostre no console.

*/

const cores1 = ["Azul", "Verde"]
const cores2 = ["Vermelho", "Amarelo"]
const colorJuntas = cores1.concat(cores2).join(" | ")
console.log(colorJuntas)