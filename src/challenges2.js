// Desafio 10
function techList(techs, name) {
  // seu código aqui
  if (techs.length == 0) {
    return 'Vazio!';
  }
  techs.sort()
  //Pesquisando por "organizar o array em ordem alfabetica javascript" no Google, encontrei a explicação do método '.sort()' no Javascript no link: https://ricardo-reis.medium.com/o-m%C3%A9todo-sort-do-array-javascript-482576734e0a#:~:text=Para%20ordenar%20esse%20array%20em,para%20o%20m%C3%A9todo%20sort()%20 e usei no código acima.
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
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};