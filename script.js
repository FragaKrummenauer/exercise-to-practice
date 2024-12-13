// Exercício 01
// Crie uma função que exiba uma mensagem de boas-vindas ao usuário quando a página for carregada. 
// Utilize essa função para personalizar a experiência de cada usuário.

function boasVindas(nome) {
    // Verifica se o nome foi fornecido 
    if (!nome) {
        return 'Olá! Bem-vindo(a)'
    }

    // Retorna mensagem personaliza com o nome
    return `Olá, ${nome}! Seja bem vindo(a)!` 
}

// Função para mostrar a mensagem quando a página carregar
function mostrarBoasVindas () {
    const nomeUsuario = prompt("Qual é o seu nome?")
    const mensagemElemento = document.getElementById('welcome-message')
    mensagemElemento.textContent = boasVindas(nomeUsuario) 
}

// Adiciona o evento de carregamento da página
window.onload = mostrarBoasVindas