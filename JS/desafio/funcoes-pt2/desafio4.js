const numero = [1,2,5,8,8,2,3,1,3,6,5,6]

/*const numeroUnicos = [1,2,5,8,3,6]*/

let numeroUnicos = []
const verifNumber = numero.reduce(function(acumulador,numeroAtual){
    if (!acumulador.includes(numeroAtual)) {
        acumulador.push(numeroAtual)
    }

    return acumulador
}, [])

console.log(verifNumber)