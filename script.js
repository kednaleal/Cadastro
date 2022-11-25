const campoCep = document.querySelector('#cep')
const campoRua = document.querySelector('#rua')
const campoBairro = document.querySelector('#bairro')
const campoCidade = document.querySelector('#cidade')
const campoEstado = document.querySelector('#estado')

campoCep.addEventListener('blur', async () => {
    const cep = campoCep.value
    const resposta  = await fetch(`https://viacep.com.br/ws/${cep}/json`)
    const endereco = await resposta .json()
    console.log('endereco: ', endereco)

    campoRua.value = endereco.logradouro
    campoBairro.value = endereco.bairro
    campoCidade.value = endereco.localidade
    campoEstado.value = endereco.uf
})

function cadastrar(){
    alert('cadastro realizado com sucesso!')
    
}

function validarCep(){
    var campoCep =document.querySelector('#cep')
    var error =document.querySelector('#erro-cep')

    if(campoCep.checkValidity())

}

