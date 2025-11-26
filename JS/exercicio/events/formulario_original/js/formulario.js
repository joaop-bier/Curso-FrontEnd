(function(){
    'use strict';

    const btncheck = document.getElementById("chkAceito") //button check
    const btnSubmit = document.getElementById("btn") // button submit(adicionar)
    const txtTitulo = document.getElementById("txtTitulo") // Campo de título
    const txtDescricao = document.getElementById("txtDescricao") // Campo de descrição
    const maxDescricao = txtDescricao.maxLength // maximo de caracters no campo descrição
    const contadorRestante = document.querySelector("#contador span") // atribuindo a span em contador
    const feedbackMessage = document.getElementById("feedbackMessage") //Feedback caso der algum erro no form(Não preencher)
    const btnFeedback = document.querySelector("#feedbackMessage button")
    
    //Função que executa quantos caraacteres falta para o MAX LENGTH
    txtDescricao.addEventListener("input", function(){
        let numbersdigits = this.value.length
        contadorRestante.textContent = maxDescricao - numbersdigits
    })

    //button submit desativado e sem interação
    btnSubmit.setAttribute("disabled", "");
    btnSubmit.style.pointerEvents = "none"

    btncheck.onclick = function(){
        //se Button check for checkado(TRUE), então ativa o button submit e permite interações
        if(btncheck.checked === true){
            btnSubmit.style.pointerEvents = "auto"
            btnSubmit.removeAttribute("disabled")
            console.log("botão marcado")

        }else{
        //Se for desmarcado denovo, faz a desativação e sem interação novamente
            btnSubmit.style.pointerEvents = "none"
            btnSubmit.setAttribute("disabled", "")
            console.log("botão não ta marcado")
    }
    }

    //Verificação se o campo título ta preenchido(obrigatorio)
    btnSubmit.addEventListener("click", function(obj){
        if(txtTitulo.value == ""){
            // se não tiver, mensagem de aviso(ERROR)
            feedbackMessage.classList.add("show")
            const btnCloseFeedback = document.querySelector("#feedbackMessage button")
            const msgError = document.querySelector("#feedbackMessage p")
            msgError.textContent = "Preencha o formulário"

            btnCloseFeedback.style.cursor = "pointer"
            btnCloseFeedback.focus()

            function hideFeedback(){
                feedbackMessage.classList.remove("show")
            }
            

            btnCloseFeedback.addEventListener("click", hideFeedback)
            obj.preventDefault()
        }
    })
    
})()