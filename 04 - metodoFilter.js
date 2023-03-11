//  Filter
// Sempre retornará um array com a mesma quantidade de elementos, ou menos elementos
// Na prática, ele faz a leitura dos elementos da array em busca de um valor de referência passado por meio de uma função callback. Ao fazer o teste em cada elemento, o método retorna um ou mais conteúdos que atendam à especificação indicada na função callback e armazena o resultado em uma nova variável do tipo array.
// Portanto, o resultado será o de todos os elementos que satisfaçam a condição do filtro. Vale ressaltar que a array original não sofre nenhum tipo de alteração pelo método filter().

// Retorne os números maiores que 10:
const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];
const maioresQueDez = numeros.filter(function (valor, indice, array) {
  return valor > 10;
});

console.log(maioresQueDez);

const menoresQueDez = numeros.filter(function (valor, indice, array) {
  return valor < 10;
});

console.log(menoresQueDez);

// Para mostrar "indice" e "array", pode dar um "console.log" dentro das funcões.

// Utilizando o conceito explícito de função callback:

function callback1(valor, indice, array) {
  return valor > 20;
}
const maioresQueVinte = numeros.filter(callback1);
console.log(maioresQueVinte);

// Exemplo com outro array:

const pessoas = [
  { nome: "Rodrigo", idade: 26, profissão: "Programador" },
  { nome: "Hugo", idade: 27, profissão: "Professor" },
  { nome: "Paulo", idade: 24, profissão: "Advogado" },
  { nome: "Gabriel", idade: 56, profissão: "Policial" },
  { nome: "Bruno", idade: 34, profissão: "Motorista" },
];

// Retorne as pessoas que tem o nome com 5 letras ou mais

const pessoasComCincoLetrasOuMais = pessoas.filter(function (valor) {
    if (valor.nome.length >= 5) {
        return valor.nome
    }
})
console.log(pessoasComCincoLetrasOuMais)

// Retorne as pessoas que tem a idade maior que 30 anos

const pessoasCOmIdadeMaiorQueTrintaAnos = pessoas.filter(function (valor) {
    if (valor.idade > 30) {
        return valor.idade
    }
})
console.log(pessoasCOmIdadeMaiorQueTrintaAnos)

// Retorne as pessoas cujo nome termina com a 
const nomeTerminaComA = pessoas.filter(function (valor) {
    return valor.nome.toLowerCase().endsWith('l');
});
console.log(nomeTerminaComA)

// toLotoLowerCase() foi utilizado para transformar o caractere em minúsculo;
// endsWith('a') = 'termina com (a)'


// Praticando um pouco: 
const array1 = ['Rodrigo', 'Sandi', 'Lucas'];

const temSandi = (valor, indice, array) => {
  if (valor === 'Sandii') {
    return true}
}

const queroFiltrar = array1.filter(temSandi)
console.log(queroFiltrar)
// Nesse caso, não me retornou nada, tendo em vista não conter o valor especificado em função callback.


const pessoas2 = [
  { nome: "Rodrigo", idade: 26, profissão: "Programador" },
  { nome: "Hugo", idade: 27, profissão: "Professor" },
  { nome: "Paulo", idade: 24, profissão: "Advogado" },
  { nome: "Gabriel", idade: 56, profissão: "Policial" },
  { nome: "Bruno", idade: 34, profissão: "Motorista" },
];

// Vamos retornar as pessoas que possuem 5 letras em seu nome, ou mais:

const pessoasComCincoLetras = pessoas2.filter(function (valor, indice, array) {
  console.log(typeof pessoas2)
  if (valor.nome.length === 5) {
    return true
  }
})

console.log(pessoasComCincoLetras)
// Ou seja, retornamos pessoas que possuem 5 letras em seu nome, através do método filter.