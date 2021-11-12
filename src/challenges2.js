// Funções auxiliares
const phoneNumber = {
  commonCase(numbers) {
    let telNumber = '';
    for (let i = 0; i < numbers.length; i += 1) {
      if (i === 0) {
        telNumber += '(';
      } else if (i === 2) {
        telNumber += ') ';
      } else if (i === 7) {
        telNumber += '-';
      }
      telNumber += `${numbers[i]}`;
    }

    return telNumber;
  },
  countCase(count, retorno) {
    for (let i = 0; i < count.length; i += 1) {
      if (count[i] >= 3) {
        retorno = 'não é possível gerar um número de telefone com esses valores';
      }
    }
    return retorno;
  },
  atypicalCase(numbers) {
    let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let retorno = '';
    for (let i = 0; i < numbers.length; i += 1) {
      if (numbers[i] < 0 || numbers[i] > 9) {
        retorno = 'não é possível gerar um número de telefone com esses valores';
      }
      count[numbers[i]] += 1;
    }
    retorno = phoneNumber.countCase(count, retorno);

    return retorno;
  },
};
const calcTriangle = {
  // Ver se o lado do triângulo é maior que o valor absoluto da diferença entre os outros dois lados.
  absolute(lineA, lineB, lineC, retorno) {
    let condition1 = lineA < Math.abs(lineB - lineC);
    let condition2 = lineB < Math.abs(lineA - lineC);
    let condition3 = lineC < Math.abs(lineA - lineB);

    if (condition1 || condition2 || condition3) {
      retorno = false;
    }

    return retorno;
  },

  // Ver se a medida de qualquer um dos lados do  triangulo é menor que a soma das medidas dos outros dois lados.
  sumTriangle(lineA, lineB, lineC, retorno) {
    let condition1 = lineA > lineB + lineC;
    let condition2 = lineB > lineA + lineC;
    let condition3 = lineC > lineA + lineB;

    if (condition1 || condition2 || condition3) {
      retorno = false;
    }

    return retorno;
  },
};

// Funções do projeto
// Desafio 10
function techList(tech, name) {
  // seu código aqui
  if (tech.length === 0) {
    return 'Vazio!';
  }
  tech.sort();
  // Pesquisando por "organizar o array em ordem alfabetica javascript" no Google, encontrei a explicação do método '.sort()' no Javascript no link abaixo e usei no código acima.
  // ref: https://ricardo-reis.medium.com/o-m%C3%A9todo-sort-do-array-javascript-482576734e0a#:~:text=Para%20ordenar%20esse%20array%20em,para%20o%20m%C3%A9todo%20sort()%20
  let saida = [];
  for (let i = 0; i < tech.length; i += 1) {
    saida[i] = { tech: tech[i], name };
  }
  return saida;
}

// Desafio 11
function generatePhoneNumber(numbers) {
  // seu código aqui
  // Caso o tamanho do array seja diferente de 11 índices:
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  // Caso algum valor do array seja menor que 0, maior que 9 ou se repita mais de 3 vezes:
  let exit = phoneNumber.atypicalCase(numbers);
  if (exit !== '') {
    return exit;
  }

  // Caso tudo esteja conforme o enunciado pede:
  let telNumber = phoneNumber.commonCase(numbers);

  return telNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  // Aprendi sobre Math.abs() no link abaixo:
  // ref: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
  let retorno = true;
  let condition1 = calcTriangle.absolute(lineA, lineB, lineC, retorno);
  let condition2 = calcTriangle.sumTriangle(lineA, lineB, lineC, retorno);

  if (!(condition1) || !(condition2)) {
    retorno = false;
  }

  return retorno;
}

// Desafio 13
function hydrate(words) {
  // seu código aqui
  // Na Expressão Regular abaixo (ver Desafio 9 desse projeto para uma explicação sobre como aprendi Regex) o '\d' significa qualquer dígito entre 0 e 9 e o '+' significa que pode ter mais de 1 número junto (isso evita que haja distorção no valor final caso seja pego apenas a unidade e seja ignorado as dezenas ou centenas). A flag 'g' faz com que seja procurado por toda extenção da string e não apenas na primeira ocasião que encontrar um dígito. O método '.match()' retorna o valor que correspondeu a busca da Expressão Regular. Além disso, 'parseInt()' converte uma string em um número inteiro (pra ser feito uma soma no lugar de concatenação).
  // ref: https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript
  // ref: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/match
  // ref: https://www.alura.com.br/artigos/convertendo-string-para-numero-em-javascript?gclid=CjwKCAiAm7OMBhAQEiwArvGi3LkqA7NL66BUT4Cx1xfgZsmJl7pz53IHwG4You0IAWwr27yBj3QcohoC2BIQAvD_BwE
  let water = words.match(/\d+/g);
  console.log(water);
  let count = 0;
  for (let i = 0; i < water.length; i += 1) {
    count += parseInt(water[i], 10);
  }
  let retorno = '';
  if (count === 1) {
    retorno = `${count} copo de água`;
  } else {
    retorno = `${count} copos de água`;
  }
  return retorno;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
