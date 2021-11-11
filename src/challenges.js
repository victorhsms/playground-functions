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
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  // caso atípico, em que o rato está no meio do percurso
  if (cat1 > mouse && cat2 < mouse || cat2 > mouse && cat1 < mouse) {
    let count1 = 0;
    let count2 = 0;

    //estou verificando a diferença entre os dois ratos sobre o mouse. No primeiro if considerando que o gato ta na frente do rato e no segundo if considerando que o gato está atrás do rato.
    if (cat1 < cat2) {
      while (cat1 != mouse) {
        cat1 += 1;
        count1 += 1;
      }
      while (cat2 != mouse) {
        cat2 -= 1;
        count2 += 1;
      }
      if (count1 < count2) {
        return "cat1";
      } else if (count2 < count1) {
        return "cat2";
      } else {
        return "os gatos trombam e o rato foge";
      }
    } else {
      while (cat1 == mouse) {
        cat1 -= 1;
        count1 += 1;
      }
      while (cat2 == mouse) {
        cat2 += 1;
        count2 += 1;
      }
      if (count1 < count2) {
        return "cat1";
      } else if (count2 < count1) {
        return "cat2";
      } else {
        return "os gatos trombam e o rato foge";
      }
    }

  }
  //caso comum
  if (cat1 < cat2) {
    return "cat1";
  } else if (cat2 < cat1) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
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

// catAndMouse(10, 4, 22);