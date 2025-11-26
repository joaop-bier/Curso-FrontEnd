(function(){
    let btn_disabled = document.getElementById("btn-cadastro")
    btn_disabled.disabled = true
}())

function enableOrDisableButton(){
    let verifTermos = document.getElementById("contrato").checked
    let btn_cadastro = document.getElementById("btn-cadastro")   
    if(verifTermos === true){
        btn_cadastro.disabled = false
    }
    else if(verifTermos === false){
        btn_cadastro.disabled = true
    }
}

