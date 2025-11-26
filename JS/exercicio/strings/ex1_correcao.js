let numberPhone = "99856-1895"
let numberPhone2 = "1234-6784"

function numbersmascarados(phone){
    let hifemPosicao = phone.indexOf("-")
    let numeroInicio = phone.slice(0, hifemPosicao)
    let numeroFinal = phone.slice(hifemPosicao + 1)

    let doisUltimosNumeros = numeroFinal.slice(-2)

    return `${numeroInicio[0].padEnd(numeroInicio.length, "*")}-${doisUltimosNumeros.padStart(numeroFinal.length, "*")}`
}

console.log(numbersmascarados(numberPhone))
console.log(numbersmascarados(numberPhone2))