// Atividades de Javascript - Do básico ao avançado
// Instruções: Escrever ao menos uma função para cada resposta. As funções não devem ter
// saída de dados na tela, pois devem retornar o resultado. Os dados são recebidos por
// parâmetros.

// 1. Escreva uma função que calcule e retorne o fatorial de um número.
function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * calcularFatorial(numero - 1);
    }
  }
  
// 2. Escreva uma função que retorne uma String contendo uma sequência de
// N mensagens do texto informado pelo usuário. O valor de N e a mensagem são
// informados por parâmetro.
function gerarSequenciaMensagens(texto, N) {
    let sequencia = "";
    for (let i = 0; i < N; i++) {
      sequencia += `${i + 1}: ${texto}\n`;
    }
    return sequencia;
  }
  
// 3. Escreva uma função que receba 2 valores e uma operação básica: adição, subtração,
// multiplicação e divisão e retorne o resultado da operação.
// Observação: Faça a validação para prevenir a divisão por 0 e também para garantir que
// a operação informada é válida. Retorne nulo para os casos de erro.
function operacaoBasica(valor1, valor2, operacao) {
    switch (operacao) {
      case "adicao":
        return valor1 + valor2;
      case "subtracao":
        return valor1 - valor2;
      case "multiplicacao":
        return valor1 * valor2;
      case "divisao":
        if (valor2 !== 0) {
          return valor1 / valor2;
        } else {
          console.log("Erro: divisão por zero não é permitida.");
          return null;
        }
      default:
        console.log("Erro: operação inválida.");
        return null;
    }
  }
  
// 4. Escreva uma função que retorne um vetor contendo o resultado da tabuada de um
// número recebido por parâmetro. Cada resultado na respectiva posição do índice.
function calcularTabuada(numTabuada){
  const tabuada = [];
  for ( let i = 1; i <= 10; i++) {
    tabuada.push(numTabuada * i);
  }
  return tabuada;
}

// 5. Escreva uma função que retorne um número fornecido pelo usuário, porém
// invertido. Por exemplo, o usuário fornece o número 875 e a função retorna o número
// 578. O argumento da função e o retorno deve ser um valor inteiro.
function invertido(numInvertido) {

}

// 6. Escreva uma função que permita contar o número de vogais contidas em uma string
// fornecida por parâmetro. Por exemplo, o usuário informa a string “Brocolis”, e a função
// retorna o número 3 (há 3 vogais nessa palavra).
function contaVogais(stringVogais) {
  // contem a,e,i,o,u

    const vogais = "aeiouAEIOU"; // Todas as vogais, tanto maiúsculas quanto minúsculas
    let contador = 0;
  
    for (let i = 0; i < stringVogais.length; i++) {
        if (vogais.includes(stringVogais[i])) {
            contador++;
        }
    }
  
    return contador;
    
}

// 7. Escreva uma função que receba uma sequência de parênteses e colchetes e retorne se
// a sequência está bem formada ou não. O retorno deve ser um valor lógico. Exemplo:
// “(([]))” retorna true, “(([)])” retorna falso.
function sequencia(seqSimbolos) {
  // [ toda vez que abre ], (toda vez que abre)
}

// 8. Escreva uma função que receba um número e retorne uma lista de objetos (id, nome e
// idade) aleatórios gerados dinamicamente. O código deve ser sequencial; use uma lista
// de nomes pré-definida; e gere idades entre 18 e 90 anos.
function dicionario(nObjetos) {
  //dicionario id, nome, e idade - id incremental, idade 18/90, gere pedro, joao e maria

}

// 9. Escreva uma função que receba a lista de objetos gerados anteriormente e calcule a
// média de idades das pessoas presentes na lista.
function mediaIdade() { // recebe a listade obj

}
// 10. Escreva uma função que receba a lista de objetos gerados anteriormente e ordene os
// dados por um dos atributos informados por parâmetros.
function ordenacao() { // não entendi

}

// =====================  Debugando/Printando =============================
console.log('================== 1 ====================');
const numero = 10;
const fatorial = calcularFatorial(numero);
console.log(`O fatorial de ${numero} é ${fatorial}`);

console.log('================== 2 ====================');
const texto = "Neidielli";
const quantidadeMensagens = 3;
const sequenciaMensagens = gerarSequenciaMensagens(texto, quantidadeMensagens);
console.log(sequenciaMensagens);

console.log('================== 3 ====================');
const valor1 = 10;
const valor2 = 5;
const operacao = "adicao";
const resultado = operacaoBasica(valor1, valor2, operacao);
console.log(`O resultado da ${operacao} entre ${valor1} e ${valor2} é ${resultado}`);

console.log('================== 4 ====================');
const numTabuada = 6;
const resultadotab = calcularTabuada(numTabuada);
console.log(`Tabuada de ${numTabuada}: ${resultadotab.join(', ')}`);

console.log('================== 5 ====================');
console.log('================== 6 ====================');
console.log('================== 7 ====================');
console.log('================== 8 ====================');
console.log('================== 9 ====================');
console.log('================= 10 ====================');

