// Complete essas funções somente com uma linha de código
// Caso não ache a função necessária para o tipo de dado que vc precisa, não se esqueça:
// O Google está aí para isso 🤓

function primeiraFuncao() {
    // TODO: Retorna um booleano

    return true;

}

function myGithubUsername() {
    // TODO: A função deve retornar o seu usuário Github

    return "raphgran";

}

function tchauEspacosEmBranco(stringExemplo) {
    // TODO: A função deve retirar todos os espaços em branco da string que é fornecida como argumento
    // Exemplo: "     oi    " deve se tornar "oi"

    let nome_completo = " Renner Lima "
    return stringExemplo.trim()
    }

function tudoMaiusculo(nomeAleatório) {
    // TODO: A função deve alterar todos os caractéres da string fornecida como argumento para maiúscula
    // Exemplo: "linaAcademy" deve se tornar "LINAACADEMY"

    return nomeAleatório.toUpperCase();

}

function tudoMinusculo(nomeAleatório) {
    // TODO: Agora ao contrário - vamos alterar todas os caractéres para minúsculo
    // Exemplo: "EUTOEMOCIONADO" deve se tornar "eutoemocionado"

    return nomeAleatório.toLowerCase()
}   


function fazParte(frase, palavra) {
    // TODO: Retorne true, caso a palavra faça parte da frase
    // Exemplo: fazParte("Saudações Tricolores", "Tricolores") => true
    // Explicando em PT-BR: Se a frase é "Tricolores", e a palavra for "Tricolores", a função retorna true

    return frase.includes(palavra)
}

function substituicao(string, charQueSeraSub, charSubstituto) {
    // TODO: Retorne uma nova string, com caractéres substituidos: charQueSeraSub por charSubstituto
    // Exemplo: substituicao("Lina", "a", "o") => "Lino"

    return string.replace(charQueSeraSub, charSubstituto)

}

function multiplicacao(num1, num2) {
    // TODO: Função que multiplica dois números e volta o resultado da operação

    
    return num1 * num2

}

function papagaio(string, numRepeticao) {
    // TODO: Retorna uma string que é repetida pela quantidade de vezes igual à numRepeticao
    // Exemplo: papagaio("Como estamos?", 3) => "Como estamos?Como estamos?Como estamos?"

    return string.repeat(numRepeticao)
}