let txtEmail = document.getElementById("txtEmail")
let msgFeedback = document.getElementById("newsletterFeedback")


function cadastroEmail(){
    let valueEmail = txtEmail.value
    msgFeedback.innerHTML = `O email: ${valueEmail}, foi cadastrado com sucesso!`
        console.log("cadastro válido")
}
