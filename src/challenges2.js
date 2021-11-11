// Desafio 10
function techList(techs, name) {
  // seu código aqui
  if (techs.length == 0) {
    return 'Vazio!'
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
function generatePhoneNumber() {
  // seu código aqui
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
