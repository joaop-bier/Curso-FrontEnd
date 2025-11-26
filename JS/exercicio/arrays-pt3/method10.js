/*

Exercício 10 — todas as três funções

Crie dois arrays com números diferentes.

Una-os com concat().

Converta o array resultante em string usando toString().

Depois, transforme a mesma string em uma versão mais legível usando join(" - ").

Mostre os resultados no console.

*/

const numbers1 = [22,1,88]
const numbers2 = [12,24,36]
const numbersJuntos = numbers1.concat(numbers2).toString()
console.log("ToString : " + numbersJuntos)

const numbersJuntos2 = numbers1.concat(numbers2).join(" - ")
console.log("Join : " + numbersJuntos2)