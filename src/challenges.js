// Funções auxiliares!
const highLevelNumbers = {
  negativeNumbers(highNumber, numbers, initialValue) {
    highNumber = initialValue;
    for (let number in numbers) {
      if (highNumber < numbers[number]) {
        highNumber = numbers[number];
      }
    }
    return highNumber;
  },
  counterNumber(numbers, count, highNumber) {
    for (let number in numbers) {
      if (numbers[number] === highNumber) {
        count += 1;
      }
    }

    return count;
  },
};

const mouseScaped = {
  baseFunction(cat1, cat2, retorno) {
    if (cat1 < cat2) {
      retorno = 'cat1';
    } else if (cat2 < cat1) {
      retorno = 'cat2';
    } else {
      retorno = 'os gatos trombam e o rato foge';
    }

    return retorno;
  },
  moduleCats(cat1, cat2, mouse, retorno) {
    let count1 = 0;
    let count2 = 0;
    while (cat1 !== mouse) {
      cat1 += 1;
      count1 += 1;
    }
    while (cat2 !== mouse) {
      cat2 -= 1;
      count2 += 1;
    }
    retorno = mouseScaped.baseFunction(count1, count2, retorno);

    return retorno;
  },
  farCat(cat1, cat2) {
    let cat = 0;
    if (cat1 > cat2) {
      cat = cat1;
    } else {
      cat = cat2;
    }

    return cat;
  },
  nearCat(cat1, cat2) {
    let cat = 0;
    if (cat1 < cat2) {
      cat = cat1;
    } else {
      cat = cat2;
    }

    return cat;
  },
};

function Desafio8(numero) {
  if (numero % 3 === 0 && numero % 5 === 0) {
    numero = 'fizzBuzz';
  } else if (numero % 3 === 0) {
    numero = 'fizz';
  } else if (numero % 5 === 0) {
    numero = 'buzz';
  } else {
    numero = 'bug!';
  }

  return numero;
}

// Funções do projeto
// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui
  let retorno;
  if (valor1 && valor2) {
    retorno = true;
  } else {
    retorno = false;
  }
  return retorno;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
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
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(numbers) {
  // seu código aqui
  let highNumber = 0;
  let count = 0;
  // Vendo qual é o maior número
  for (let number in numbers) {
    if (highNumber < numbers[number]) {
      highNumber = numbers[number];
    }
  }
  // Se todos os números forem negativos, a variável com o maior número pega o valor do primeiro índice do array e procura um valor maior entre os outros índices.
  if (highNumber === 0) {
    highNumber = highLevelNumbers.negativeNumbers(highNumber, numbers, numbers[0]);
  }
  // Contando quantas vezes se repete o maior número no array.
  count = highLevelNumbers.counterNumber(numbers, count, highNumber);
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let retorno = '';
  // variáveis a seguir apenas para ver qual o gato com maior número e qual está com o menor para completar o IF a seguir.
  let far = parseInt(mouseScaped.farCat(cat1, cat2), 10);
  let near = parseInt(mouseScaped.nearCat(cat1, cat2), 10);

  if (mouse > far || mouse < near) {
    // caso comum
    retorno = mouseScaped.baseFunction(cat1, cat2, retorno);
  } else {
    // caso atípico, em que o rato está no meio do percurso
    retorno = mouseScaped.moduleCats(cat1, cat2, mouse, retorno);
  }

  return retorno;
}

// Desafio 8
function fizzBuzz(numbers) {
  // seu código aqui
  for (let i = 0; i < numbers.length; i += 1) {
    numbers[i] = Desafio8(numbers[i]);
  }
  return numbers;
}

// Desafio 9
// Observação sobre o exercícios 9 e o uso de Expressões Regulares (RegExp ou apenas Regex). Expressões Regulares é uma forma de se encontrar um conjunto de caracteres em todo um string. Dentro de um método replace, ele substitui o conjunto de caracteres que estava procurando pelo informado. O motivo de eu ter usado Expressão Regular foi pela flag 'g', que realiza a substituição em toda extenção da string (não apenas no primeiro caracter encontrado), visto que não encontrei uma forma de usar a flag com o replace puro, sem o uso de Expressão Regular.
// Eu aprendi expressões Regulares no curso da Alura "Expressões Regulares: Capturando textos de forma mágica", no conteúdo 7 "7. Usando regex nas diversas linguagens" e na aula "Regex com Javascript". Link do curso abaixo:
// ref: https://www.alura.com.br/curso-online-expressoes-regulares
// ref: https://www.w3schools.com/js/js_string_methods.asp
function encode(frase) {
  // seu código aqui
  frase = frase.replace(/a/g, '1');
  frase = frase.replace(/e/g, '2');
  frase = frase.replace(/i/g, '3');
  frase = frase.replace(/o/g, '4');
  frase = frase.replace(/u/g, '5');

  return frase;
}
function decode(frase) {
  // seu código aqui
  frase = frase.replace(/1/g, 'a');
  frase = frase.replace(/2/g, 'e');
  frase = frase.replace(/3/g, 'i');
  frase = frase.replace(/4/g, 'o');
  frase = frase.replace(/5/g, 'u');

  return frase;
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
