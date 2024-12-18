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
// ---------------------------------------------------------------------------------------------------
// Exercício 4
// Crie uma função que receba uma string como parâmetro e retorne a mesma string com todas as 
// letras em caixa alta. Utilize essa função para converter diferentes strings.

// Função básica para converter string para maiúsculas
function converterMaiusculo (texto) {
    // Verifica se a entrada é uma string
    if (typeof texto !== 'string') {
        return 'Entrada inválida! Forneça um string.'
    }

    // Converte para maiúsculas
    return texto.toUpperCase()
}

// Função com tratamentos adicionais
function converterMaiusculoAvancadas (texto) {
    // Verifica se a entrada é válida
    if (typeof texto !== 'string') {
        return 'Entrada inválida! Forneça uma string.'
    }

    // Remove espaços extras no início e fim
    const textoTratado = texto.trim()

    // Converte para maiúsculo
    return textoTratado.toUpperCase()
}

// Exemplos de uso
console.log('Conversão para Maiúsculo:')

    // Exemplos com nomes
    console.log('Nome:', converterMaiusculo('maria eduarda'))
    console.log('Nome:', converterMaiusculo('João Pedro Santos'))

    // Exemplo com frases
    console.log('Frase:', converterMaiusculo('olá, mundo!'))

// Exemplo com Função Avançadas
console.log('\nFunção Avançada:')
console.log('Com Espaços:', converterMaiusculoAvancadas('   teste de string  '))
console.log('Frase mista:', converterMaiusculoAvancadas('Javascript é Incrível'))

// Exemplos de tratamento de erro
console.log('\nTratamento de Entradas Erro:')
console.log('Número:', converterMaiusculo(123))
console.log('Objeto:', converterMaiusculo({}))

// Exemplos de tratamento de erro com Função Avançadas
console.log('\nFunção Avançada Erro:')
console.log('Número:', converterMaiusculoAvancadas(123))
console.log('Objeto:', converterMaiusculoAvancadas({}))
// ---------------------------------------------------------------------------------------------------
// Exercício 5
// Desenvolva uma função que determine se um número é primo ou não. Retorne true se for primo e false se não for.

// Função básica para verificar número primo
function ehPrimo (numero) {
    // Verifica se o número é primo
    if (typeof numero !== 'number' || numero <= 1) {
        return false
    }

    // Verifica divisibilidade até a raiz quadrada do número
    for (i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false
        }
    }

    return true
}

// Função com análise mais detalhada 
function verificadorPrimo(numero) {
    // Validações iniciais
    if (typeof numero !== 'number') {
        return {
            numero: numero,
            ehPrimo: false,
            motivo: 'Entrada inválida! Forneça um número.',
        }
    }

    // Casos especiais
    if (numero <= 1) {
        return {
            numero: numero,
            ehPrimo: false,
            motivo: 'Números menores ou iguais a 1 não são primos'
        }
    }

    // Verifica divisibilidade
    for (i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return {
                numero: numero,
                ehPrimo: false,
                motivo: `Divisível por ${i}`
            }
        }
    }

    return {
        numero: numero,
        ehPrimo: true,
        motivo: 'Número primo'
    }
}

// Exemplo de uso
console.log('Verificação e Números Primos')

// Exemplo com função básica
console.log('2 é primo?', ehPrimo(2))
console.log('7 é primo?', ehPrimo(7))
console.log('10 é primo?', ehPrimo(10))
console.log('17 é primo?', ehPrimo(17))
console.log('1 é primo?', ehPrimo(1))

// Exemplos com função detalhada
console.log('\nAnálise Detalhada:')
console.log(verificadorPrimo(2))
console.log(verificadorPrimo(10))
console.log(verificadorPrimo(17))
console.log(verificadorPrimo(20))
console.log(verificadorPrimo(250))
// ---------------------------------------------------------------------------------------------------
// Exercício 6
// Implemente uma função que inverta a ordem dos elementos em um array. Utilize essa função para inverter a 
// ordem de diferentes conjuntos de elementos.

// Função básica para inverter array
function inverterArray(array) {
    // Verifica se é um array
    if (!Array.isArray(array)) {
        return 'Entrada inválida! Forneça um array.'
    }

    // Método simples de inversão
    return array.reverse()
}

// Função de inversão sem modificar o array original 
function inverterArraySemModificar(array) {
    // Verifica se é um array
    if (!Array.isArray(array)) {
        return 'Entrada inválida! Forneça um array.'
    }

    // Cria uma cópia e inverte
    return [...array].reverse()
}

// Funcão de inversão manual (sem métodos prontos)
function inverterArrayManualmente(array) {
    // Verifica se é um array
    if (!Array.isArray(array)) {
        return 'Entrada inválida! Forneça um array.'
    }

    // Cria um novo array invertido
    const arrayInvertido = []
    for (let i = array.length - 1; i >= 0; i--) {
        arrayInvertido.push(array[i])
    }

    return arrayInvertido
}

// Exemplos de uso
console.log('Inversão de array:')

// Array de números
const numerosArray = [ 1, 2, 3, 4, 5]
console.log('Array de números:')
console.log('Original:', numerosArray)
console.log('Invertido (método 1)', inverterArray(numerosArray))
console.log('Original após a inversão:', numerosArray)


// Array's de strings
const frutas = ['maçã', 'banana', 'laranja', 'uva']
console.log('\nArray de frutas:')
console.log('Original:', frutas)
console.log('Invertido (sem modificar):', inverterArraySemModificar(frutas))
console.log('Original:', frutas)

// Array misto
const dadosMistos = [ 10, 'hello', true, [1, 2], { nome: 'João' } ]
console.log('\nArray misto:')
console.log('Original:', dadosMistos)
console.log('Invertido (manualmente):', inverterArrayManualmente(dadosMistos))
// ---------------------------------------------------------------------------------------------------