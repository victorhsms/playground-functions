// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui
  if (valor1 && valor2) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height)/2;
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  let words = frase.split(' ');

  return words;
}

// Desafio 4
function concatName(words) {
  // seu código aqui
  return `${words[words.length - 1]}, ${words[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return wins*3+ties;
}

// Desafio 6
function highestCount(numbers) {
  // seu código aqui
  let highNumber = 0;
  let count = 0;
  //Vendo qual é o maior número
  for (number in numbers) {
    if (highNumber < numbers[number]) {
      highNumber = numbers[number];
    }
  }
  //Se todos os números forem negativos, a variável com o maior número pega o valor do primeiro índice do array e procura um valor maior entre os outros índices.
  if (highNumber == 0) {
    highNumber = numbers[0];
    for (number in numbers) {
      if (highNumber < numbers[number]) {
        highNumber = numbers[number];
      }
    }
  }
  //Contando quantas vezes se repete o maior número no array.
  for (number in numbers) {
    if (numbers[number] == highNumber) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};