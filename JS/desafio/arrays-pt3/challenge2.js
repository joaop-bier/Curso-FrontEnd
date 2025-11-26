const namesAnimals = ["Pato","Gato","Golfinho","Rato", "Patolino?", "Pamonha?"]
const siglasCont = namesAnimals.reduce(function(acumuletSigla, el){
    const letra = el[0]

    if(acumuletSigla[letra]){
        acumuletSigla[letra]++
    } else {
        acumuletSigla[letra] = 1
    }

    return acumuletSigla
},{})

console.log(siglasCont)