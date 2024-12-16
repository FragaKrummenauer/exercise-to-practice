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
// ---------------------------------------------------------------------------------------------------
// Exercício 2
// Desenvolva uma função que receba um número como parâmetro e verifique se ele é par ou ímpar. `
// Retorne true se for par e false se for ímpar.

// Função para verificar se o número é par
function ehPar(numero) {
    // Verifica se o número éum número valido 
    if (typeof numero !== 'number') {
        return 'Entrada inválida! Forneça um número.'
    }

    // Usa o operador de módulo (%) para verificar 
    // Se o resto da divisão por 2 for 0, é par
    return numero % 2 === 0;
}

// Exemplos de uso
console.log('Verificação de números Pares e Ímpares:')
console.log('10 é par?', ehPar(2))
console.log('7 é par?', ehPar(7))
console.log('0 é par?', ehPar(0))
console.log('-4 é par?', ehPar(-4))
console.log('-3 é par?', ehPar(-3))

// Função alternativa com mais detalhes
function verificarParidade(numero) {
    // Verifica se é um número
    if (typeof numero !== 'number') {
        return 'Entrada inválida!'
    }

    // Retorna um objeto com mais informções
    return {
        numero: numero,
        ehPar: numero % 2 === 0,
        ehImpar: numero % 2 !== 0,
        mensagem: numero % 2 === 0
        ? `${numero} é um número Par`
        : `${numero} é um número Ímpar`
    }
}

// Exemplos d funções mais detalhada
console.log('\nVerificação detalhada:')
console.log(verificarParidade(15))
console.log(verificarParidade(20))
// ---------------------------------------------------------------------------------------------------
// Exercício 3
// Implemente uma função que calcule a média aritmética de um array de números e retorne o resultado. 
// Utilize essa função para calcular a média de diferentes conjuntos de números.

// Função para calcular média aritmédica
function calcularMedia(numeros) {
    // Verifica se o array está vazio
    if (numeros.length === 0) {
        return 0
    }

    // Calcula a soma de todos os números
    const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0)

    // Calcula a média dividindo a soma pelo total de números

    return soma / numeros.length
}

// Funções com validações adicionais
function calcularMediaCompleta(numeros) {
    // Verifica se é um array
    if (!Array.isArray(numeros)) {
        throw new Error('Entrada deve ser um array de números')
    }

    // Filtra apenas números válidos
    const numerosValidos = numeros.filter(numero => typeof numero === 'number' && !isNaN(numero))

    // Verifica se há números válidos
    if (numerosValidos.length === 0) {
        return 0
    }

    // Calcula a média
    const soma = numerosValidos.reduce((acc, curr) => acc + curr, 0)
    return soma / numerosValidos.length
}

// Exemplos de uso
// Média sendo calculada pela Função calcularMedia
    console.log('Exemplos de Médias:')

    // Conjunto de notas de um aluno
    const notasAluno1 = [7.5, 8.0, 6.5, 9.0]
    console.log('Média das notas do Aluno 01:', calcularMedia(notasAluno1))

    // Temperaturas de uma semana
    const temperaturasSemanais = [22.5, 23.0, 21.8, 24.2, 22.9, 23.5, 22.0]
    console.log('Média de Temperaturas:', calcularMedia(temperaturasSemanais))

    // Conjunto de números diferentes
    const conjuntoNumeros = [10, 20, 30, 40, 50]
    console.log('Média de conjunto de números:', calcularMedia(conjuntoNumeros))

// Exemplo com função completa
// Médiasendo calculada pela função calcularMediaCompleta

    try {
        console.log('Média com validações:')
        console.log(calcularMediaCompleta([5, 10, 15, 20, 25]))

    // Testando validações
    console.log(calcularMediaCompleta([5, 10, 'texto', null, 20]))  

} catch (erro) {
    console.erro(erro.message)
}

