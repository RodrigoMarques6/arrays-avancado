//  Filter
// Sempre retornará um array com a mesma quantidade de elementos, ou menos elementos
// Na prática, ele faz a leitura dos elementos da array em busca de um valor de referência passado por meio de uma função callback. Ao fazer o teste em cada elemento, o método retorna um ou mais conteúdos que atendam à especificação indicada na função callback e armazena o resultado em uma nova variável do tipo array.
// Portanto, o resultado será o de todos os elementos que satisfaçam a condição do filtro. Vale ressaltar que a array original não sofre nenhum tipo de alteração pelo método filter().


// Retorne os números maiores que 10:
const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];
const maioresQueDez = numeros.filter(function (valor) {
  return valor > 10;
});

console.log(maioresQueDez);

const menoresQueDez = numeros.filter(function (valor) {
  return valor < 10;
});

console.log(menoresQueDez);


function callback1 (valor) {
    return valor > 20;
}
const maioresQueVinte = numeros.filter(callback1)
console.log(maioresQueVinte)