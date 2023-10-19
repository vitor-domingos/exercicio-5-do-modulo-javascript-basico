
// Definindo uma função que aceita 10 valores e retorna um array com esses valores
function valoresDaVariavelX(firstnumber, secondnumber, thirdnumber, fourthnumber, fifthnumber, sixthnumber, seventhnumber, eighthnumber, ninthnumber, tenthnumber) {
  // Retorna um array contendo os valores passados como argumentos
  return [firstnumber, secondnumber, thirdnumber, fourthnumber, fifthnumber, sixthnumber, seventhnumber, eighthnumber, ninthnumber, tenthnumber];
}

// Chama a função com 10 valores e armazena o array retornado em resultadoDosValoresDaVariavel
let resultadoDosValoresDaVariavel = valoresDaVariavelX(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Exibe o resultado da função no console
console.log(resultadoDosValoresDaVariavel);

// Define um array chamado "numbers" com 10 números
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Usando um loop "for" para dobrar cada número no array "numbers"
for (let y = 0; y < numbers.length; y++) {
  numbers[y] *= 2; // Dobra o valor do elemento no índice "y"
}

// Exibe uma mensagem que combina o resultado da função com os números dobrados no console
console.log("O dobro do número " + resultadoDosValoresDaVariavel + " é " + numbers);
