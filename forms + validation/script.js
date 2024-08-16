const form = document.querySelector('#form')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const senha = document.querySelector('#senha')
const confirmarSenha = document.querySelector('#senha-confirmada')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkForm()
})

const checkInputUsername = () => {
    const usernameValue = username.value

    //validations

    if(usernameValue === '') {
        //mostrar aviso e mensagem de erro

        errorInput(username, 'Username obrigatório')

    } else {
        const formItem = username.parentElement
        formItem.className = 'form-content'
    }
}

const checkInputEmail = () => {
    const emailValue = email.value

    //validations

    if(emailValue === '') {
        errorInput(email, 'email obrigatório')
    } else {
        const formItem = email.parentElement
        formItem.className = 'form-content'
    }
}

const checkInputSenha = () => {
    const senhaValue = senha.value

    if(senhaValue === '') {
        errorInput(senha, 'senha obrigatória')
    } else {
        const formItem = senha.parentElement
        formItem.className = 'form-content'
    }
}

const checkInputConfirmarSenha = () => {
    const confirmarSenhaValue = confirmarSenha.value
    const senhaValue = senha.value

    if(checkInputConfirmarSenha === '') {
        errorInput(confirmarSenha, 'Confirmação de senha orbigatória')
    } else if (confirmarSenhaValue !== senhaValue) {
        errorInput(confirmarSenha, 'As senhas Não são iguais')
    } else {
        const formItem = senha.parentElement
        formItem.className = 'form-content' 
    }
}

const checkForm = () => {

    checkInputUsername()
    checkInputEmail()
    checkInputSenha()
    checkInputConfirmarSenha()

    const formItems = form.querySelectorAll('.form-content')
    const isValid = [...formItems].every((item) => {
        return item.className === 'form-content'
    })

    if(isValid) {
        alert('Cadastrado')
    }


}

const errorInput = (input, message) => {
    const formItem = input.parentElement
    const textMessage = formItem.querySelector('a')

    textMessage.innerText = message
    formItem.className = 'form-content error'
}