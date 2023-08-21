// Atividades de Javascript - Do básico ao avançado
// Instruções: Escrever ao menos uma função para cada resposta. As funções não devem ter
// saída de dados na tela, pois devem retornar o resultado. Os dados são recebidos por
// parâmetros.

// 1. Escreva uma função que calcule e retorne o fatorial de um número.
function calcularFatorial(numero) { // função recursiva
    if (numero < 1 || numero === 1) {
      return 1;
    } else {
      return numero * calcularFatorial(numero - 1);
    }
  }

// 1 não recursiva
// let fatorialnr = function(n) {
//   let total = 1
//   for (let i = 2; i <= n; i++) {
//     total = total * 1;
//   }
//   return total;
// }
  
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
function inverterNumero(numeroParametro) {
  let numeroInvertido = 0;

  while (numeroParametro > 0) {
    const digito = numeroParametro % 10; // ultimo dígito
    numeroInvertido = numeroInvertido * 10 + digito;
    numeroParametro = Math.floor(numeroParametro / 10);
  }

  return numeroInvertido;
}
// 6. Escreva uma função que permita contar o número de vogais contidas em uma string
// fornecida por parâmetro. Por exemplo, o usuário informa a string “Brocolis”, e a função
// retorna o número 3 (há 3 vogais nessa palavra).
function contaVogais(stringVogais) {
  // contem a,e,i,o,u

    const vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']; // Todas as vogais, maiuscula e minuscula
    let contador = 0;
  
    for (let char of stringVogais.toLowerCase()) {
        if (vogais.includes(char)) {
            contador++;
        }
    }
  
    return contador;
    
}

// 7. Escreva uma função que receba uma sequência de parênteses e colchetes e retorne se
// a sequência está bem formada ou não. O retorno deve ser um valor lógico. Exemplo:
// “(([]))” retorna true, “(([)])” retorna falso.
function verificarSequenciaBemFormada(sequencia) {
  const stack = [];
  const aberturas = "([{";
  const fechamentos = ")]}";

  for (let char of sequencia) {
    if (aberturas.includes(char)) {
      stack.push(char);
    } else if (fechamentos.includes(char)) {
      const correspondenteAbertura = aberturas[fechamentos.indexOf(char)];
      if (stack.length === 0 || stack.pop() !== correspondenteAbertura) {
        return false;
      }
    }
  }

  return stack.length === 0;
}


// 8. Escreva uma função que receba um número e retorne uma lista de objetos (id, nome e
// idade) aleatórios gerados dinamicamente. O código deve ser sequencial; use uma lista
// de nomes pré-definida; e gere idades entre 18 e 90 anos.
function gerarListaPessoas(numero) {
  const nomes = ["Maria", "João", "Carla", "Mario"];
  const listaPessoas = [];

  for (let i = 0; i < numero; i++) {
    const nomeAleatorio = nomes[Math.floor(Math.random() * nomes.length)];
    const idadeAleatoria = Math.floor(Math.random() * (90 - 18 + 1)) + 18;
    const pessoa = {
      id: i + 1,
      nome: nomeAleatorio,
      idade: idadeAleatoria,
    };
    listaPessoas.push(pessoa);
  }

  return listaPessoas;
}


// 9. Escreva uma função que receba a lista de objetos gerados anteriormente e calcule a
// média de idades das pessoas presentes na lista.
function calcularMediaIdades(listaPessoas) {
  if (listaPessoas.length === 0) {
    return 0;
  }

  const totalIdades = listaPessoas.reduce((acc, pessoa) => acc + pessoa.idade, 0);
  const mediaIdades = totalIdades / listaPessoas.length;
  return mediaIdades;
}

// 10. Escreva uma função que receba a lista de objetos gerados anteriormente e ordene os
// dados por um dos atributos informados por parâmetros.
function ordenarPorAtributo(listaPessoas, atributo) {
  if (atributo === "id" || atributo === "nome" || atributo === "idade") {
    return listaPessoas.slice().sort((a, b) => a[atributo] - b[atributo]);
  } else {
    console.log("Atributo inválido. Escolha 'id', 'nome' ou 'idade'.");
    return listaPessoas;
  }
}


// =====================  Debugando/Printando =============================
console.log('================== 1 ====================');
const numero = 10;
const fatorial = calcularFatorial(numero);
console.log(`O fatorial de ${numero} é ${fatorial}`);

// console.log('================== 1 nr ====================');
// const n = 10;
// console.log(`O fatorial de ${n} é ${total}`);

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
const numeroOriginal = 75;
const numeroInvertido = inverterNumero(numeroOriginal);
console.log(`Número original: ${numeroOriginal}`);
console.log(`Número invertido: ${numeroInvertido}`);

console.log('================== 6 ====================');
const palavra = "Alta";
const numeroVogais = contaVogais(palavra);
console.log(`A palavra "${palavra}" tem ${numeroVogais} vogais.`);

console.log('================== 7 ====================');
const sequencia1 = "(([]))";
const sequencia2 = "(([)])";
console.log(verificarSequenciaBemFormada(sequencia1)); // true
console.log(verificarSequenciaBemFormada(sequencia2)); // false

console.log('================== 8 ====================');
const quantidadePessoas = 5;
const pessoasAleatorias = gerarListaPessoas(quantidadePessoas);
console.log(pessoasAleatorias);

console.log('================== 9 ====================');
const pessoaAleatorias = [
  { id: 1, nome: 'Mario', idade: 51 },
  { id: 2, nome: 'João', idade: 72 },
  { id: 3, nome: 'Mario', idade: 86 },
  { id: 4, nome: 'Maria', idade: 44 },
  { id: 5, nome: 'Carla', idade: 28 }
];

const mediaIdades = calcularMediaIdades(pessoasAleatorias);
console.log(`A média de idades das pessoas é: ${mediaIdades.toFixed(2)}`);

console.log('================= 10 ====================');
const pessoaAleatoria = [
  { id: 1, nome: 'Maria', idade: 26 },
  { id: 2, nome: 'Mario', idade: 28 },
  { id: 3, nome: 'Maria', idade: 88 },
  { id: 4, nome: 'Mario', idade: 67 },
  { id: 5, nome: 'Maria', idade: 25 }
];

const atributoParaOrdenar = "idade"; 
const pessoasOrdenadas = ordenarPorAtributo(pessoasAleatorias, atributoParaOrdenar);
console.log(pessoasOrdenadas);


