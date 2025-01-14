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
// Exercício 7
// Crie uma função que receba um valor e uma porcentagem como parâmetros. 
// A função deve retornar o valor acrescido da porcentagem indicada.

// Função básica para calcular valor com acréscimo 
function calcularAcrescimo(valor, porcentagem) {
    // Validação de entreda
    if (typeof valor !== 'number' || typeof porcentagem !== 'number') {
        return 'Erro: Por Favor, forneça valores válidos'
    }

    // Calcula o acréscimo
    const acrescimo = valor * (porcentagem/100)

    // Retorna valor total com acréscimo
    return valor + acrescimo
}

// Função com mais detalhes
function calcularAcrescimoDetalhado(valor, porcentagem) {
    // Validação de entreda
    if (typeof valor !== 'number' || typeof porcentagem !== 'number') {
        return 'Erro: Por Favor, forneça valores válidos'
    }

    // Cálculos
    const acrescidoDetalhado = valor * (porcentagem/100)
    const valorTotal = valor + acrescidoDetalhado

    // Retorna objetos com informações detalhadas
    return {
        valorOriginal: valor,
        porcentagem: porcentagem,
        valorAcrescimo: acrescidoDetalhado,
        valorTotal: valorTotal,
    }
}

// Exempplos de uso
console.log('Cálculos de Acrescimo:')

// Exemplos com função básica
console.log('Valor R$ 100 + 10%', calcularAcrescimo(100, 10))
console.log('Valor R$ 50 + 20%', calcularAcrescimo(50, 20))

// Exemplo com função detalhada
console.log('\nCálculos detalhados:')
console.log(calcularAcrescimoDetalhado(100,10))
console.log(calcularAcrescimoDetalhado(50, 20))

// Exemplos com valores diferentes
const produto = 1250
const produtoAcrescimo = 15

console.log('\nProduto de R$1250 com 15% de acréscimo:')
console.log(calcularAcrescimoDetalhado(produto, produtoAcrescimo))
// ---------------------------------------------------------------------------------------------------
// Exercício 8
// Desenvolva uma função que verifique se uma palavra é um palíndromo (lê-se da mesma forma da esquerda para a direita e vice-versa). 
// Retorne true se for um palíndromo e false se não for.

// Função básica para verificar palíndromo
function ehPalindromo (palavra) {
    // Verifica se é uma string
    if (typeof palavra !== 'string') {
        return 'Erro: Por Favor, forneça uma string válida.'
    }

    // Remove espaços e converte para minúsculo
    let textoLimpo = palavra.toLowerCase().replace(/\s/g, '')
    
    // Inverte a string e compara
    let textoInvertido = textoLimpo.split('').reverse().join('')

    return textoLimpo === textoInvertido
}

// Função com análise mais detalhada
function verificarPalindromo(texto) {
    // Validação de entrada
    if (typeof texto !== 'string') {
        return {
            texto: texto,
            ehPalindromo: false,
            motivo: 'Entrada inválida! Forneça uma string',
        }
    }

    // Limpa texto (remove espaços e converte para minúsculas)
    const textoLimpoUm = texto.toLowerCase().replace(/\s/g, '')
    const textoInvertidoUm = textoLimpoUm.split('').reverse().join('')

    return {
        textoOriginal: texto,
        textoLimpo: textoLimpoUm,
        textoInvertido: textoInvertidoUm,
        ehPalindromo: textoLimpoUm === textoInvertidoUm,
        motivo: textoLimpoUm === textoInvertidoUm 
        ? 'É um Palíndromo'
        : 'Não é um Palíndromo'
    }
}

// Exemplos de uso
console.log('Verificação de Palíndromo:')

// Exemplos com a função básica
console.log('"ana"', ehPalindromo('ana'))
console.log('"radar"', ehPalindromo('radar'))
console.log('"javascript"', ehPalindromo('javascript'))
console.log("'A man a plan a canal Panama':", ehPalindromo("A man a plan a canal Panama"))

// Exemplos com a função detalhada
console.log('\nAnálise Detalhada:')
console.log(verificarPalindromo('Ovo'))
console.log(verificarPalindromo('teste'))
// ---------------------------------------------------------------------------------------------------
// Exercício 9
// Implemente uma função que receba um número como parâmetro e retorne sua representação binária. 
// Utilize essa função para converter diferentes números em binário.

// Função básica para converter para binário
function converterParaBinario ( numero ) {
    // Verifica se é um número
    if ( typeof numero !== 'number' || isNaN(numero) ) {
        return 'Erro: Por favor, forneça um número válido.'
    }

    // Método simples usando toString(2)
    return numero.toString(2)
}

// Função com onversão manual
function converterParaBinarioManual ( numero ) {
    // Validação de entrada
    if ( typeof numero !== 'number' || isNaN(numero)) {
        return 'Erro: Por favor, forneça um número válido.'
    }

    if (numero === 0 ) return '0'
    if ( numero < 0 ) return `-${converterParaBinarioManual(-numero)}`

    let binario = ''
    let num = numero

    // Processo de divisão por 2
    while ( num > 0 ) {
        binario = ( num % 2 ) + binario
        num = Math.floor( num / 2 )
    }

    return binario
}

// Função com detalhes do processo
function converterParaBinarioDetalhado ( numero ) {
    // Valido
    if ( typeof numero !== 'number' || isNaN(numero) ) {
        return {
            entrada: numero,
            erro: 'Entrada inválida.'
        }
    }

    const binarioNativo = converterParaBinario(numero)
    const binarioManual = converterParaBinarioManual(numero)

    return {
        numeroOriginal: numero,
        binario: binarioNativo,
        binarioManual: binarioManual,
        numeroDeBits: binarioNativo.length,
        validacao: binarioNativo === binarioManual ? 'Conversões iguais' : 'Erro na conversão',
    }
}

// Exemplos de uso
console.log('Conversão para Binário:')

// Exemplo com função básica
console.log('10 em bínario:', converterParaBinario(10))
console.log('42 em binário:', converterParaBinario(42))
console.log('7 em binário:', converterParaBinario(7))

// Exemplos com função manual
console.log('\nConversão Manual:')
console.log('15 em binário:', converterParaBinarioManual(15))
console.log('25 em binário:', converterParaBinarioManual(25))

// Exemplos com função detalhada
console.log("\nConversão Detalhada:")
console.log(converterParaBinarioDetalhado(13))
console.log(converterParaBinarioDetalhado(21))
// ---------------------------------------------------------------------------------------------------
// Exercício 10
// Crie uma função que calcule o fatorial de um número. Utilize essa função para calcular o fatorial de diferentes números.

function calcularFatorial( numero ) {
    // Verificar se o número é negativo
    if ( numero < 0 ) {
        return 'Não é possível calcular fatorial de número negativo'
    }

    // Casos base: fatorial de 0 ou 1 é 1
    if ( numero === 0 || numero === 1 ) {
        return 1
    }

    let resultadoFatorial = 1
    while ( numero > 1 ) {
        resultadoFatorial *= numero
        numero--
    }

    return resultadoFatorial

}

// Testes com diferentes números 
console.log('Fatorial com 0', calcularFatorial(0))
console.log('Fatorial com 1', calcularFatorial(1))  
console.log('Fatorial com 5', calcularFatorial(5))
console.log('Fatorial com 7', calcularFatorial(7))
console.log('Fatorial com -3', calcularFatorial(-3))
// ---------------------------------------------------------------------------------------------------
// Exercícios Adicionais
// ---------------------------------------------------------------------------------------------------

