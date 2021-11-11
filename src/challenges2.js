// Desafio 10
function techList(techs, name) {
  // seu código aqui
  if (techs.length == 0) {
    return 'Vazio!';
  }
  techs.sort()
  //Pesquisando por "organizar o array em ordem alfabetica javascript" no Google, encontrei a explicação do método '.sort()' no Javascript no link abaixo e usei no código acima.
  // ref: https://ricardo-reis.medium.com/o-m%C3%A9todo-sort-do-array-javascript-482576734e0a#:~:text=Para%20ordenar%20esse%20array%20em,para%20o%20m%C3%A9todo%20sort()%20
  let saida = [];
  for (let tech in techs) {
    saida[tech] = {'tech':techs[tech],'name':name};
  }
  return saida;
}

// Desafio 11
function generatePhoneNumber(numbers) {
  // seu código aqui
  // Caso o tamanho do array seja diferente de 11 índices:
  if (numbers.length != 11) {
    return 'Array com tamanho incorreto.';
  }
  // Caso algum valor do array seja menor que 0, maior que 9 ou se repita mais de 3 vezes:
  let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let number in numbers) {
    if (numbers[number] < 0 || numbers[number] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    count[numbers[number]] += 1;
  }
  for (let i = 0; i < count.length; i++) {
    if (count[i] >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  //Caso tudo esteja conforme o enunciado pede:
  let telNumber = '';
  for (let i = 0; i < numbers.length; i++) {
    if (i == 0) {
      telNumber += '(';
    }
    if (i == 2) {
      telNumber += ') ';
    }
    if (i == 7) {
      telNumber += '-';
    }
    telNumber += `${numbers[i]}`;
  }

  return telNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  //Aprendi sobre Math.abs() no link abaixo:
  // ref: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
  if (lineA > lineB + lineC || lineA < Math.abs(lineB - lineC)) {
    return false;
  } else if (lineB > lineA + lineC || lineB < Math.abs(lineA - lineC)) {
    return false;
  } else if (lineC > lineA + lineB || lineC < Math.abs(lineA - lineB)) {
    return false;
  } else {
    return true;
  }
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
  for (let number in water) {
    count += parseInt(water[number]);
  }
  if (count == 1) {
    return `${count} copo de água`;
  } else {
    return `${count} copos de água`;
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
