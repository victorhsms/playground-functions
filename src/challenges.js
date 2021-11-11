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
function fizzBuzz(numbers) {
  //seu código aqui
  for (number in numbers) {
    if (numbers[number] % 3 == 0 && numbers[number] % 5 == 0) {
      numbers[number] = 'fizzBuzz';
    } else if (numbers[number] % 3 == 0) {
      numbers[number] = 'fizz';
    } else if (numbers[number] % 5 == 0) {
      numbers[number] = 'buzz';
    } else {
      numbers[number] = 'bug!';
    }
  }
  return numbers;
}

// Desafio 9
//Observação sobre o exercícios 9 e o uso de Expressões Regulares (RegExp). Expressões Regulares é uma forma de se encontrar um conjunto de caracteres em todo um string. Dentro de um método replace, ele substitui o conjunto de caracteres que estava procurando pelo informado. O motivo de eu ter usado Expressão Regular foi pela flag 'g', que realiza a substituição em toda extenção da string (não apenas no primeiro caracter encontrado), visto que não encontrei uma forma de usar a flag com o replace puro, sem o uso de Expressão Regular.
// Eu aprendi expressões Regulares no curso da Alura "Expressões Regulares: Capturando textos de forma mágica", no conteúdo 7 "7. Usando regex nas diversas linguagens" e na aula "Regex com Javascript". Link do curso: https://www.alura.com.br/curso-online-expressoes-regulares
function encode(frase) {
  // seu código aqui
  frase = frase.replace(new RegExp('a', 'g'),'1');
  frase = frase.replace(new RegExp('e', 'g'),'2');
  frase = frase.replace(new RegExp('i', 'g'),'3');
  frase = frase.replace(new RegExp('o', 'g'),'4');
  frase = frase.replace(new RegExp('u', 'g'),'5');

  return frase;
}
function decode(frase) {
  // seu código aqui
  frase = frase.replace(new RegExp('1', 'g'),'a');
  frase = frase.replace(new RegExp('2', 'g'),'e');
  frase = frase.replace(new RegExp('3', 'g'),'i');
  frase = frase.replace(new RegExp('4', 'g'),'o');
  frase = frase.replace(new RegExp('5', 'g'),'u');

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
