const letras = ["a","b","c","d","e"]


    function verifContem(letraVerif){
        if(letras.includes(letraVerif)){
            return console.log(`A array contém ${letraVerif} na posição ${letras.indexOf(letraVerif)}`)
        }else{
            return console.log(`Não contém o número/letra solicitada (${letraVerif})`)
        
    }
}

verifContem("a")
verifContem(3)
verifContem("h")