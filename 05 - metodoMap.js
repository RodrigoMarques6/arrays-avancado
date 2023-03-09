// Similar ao filter, porém ela altera valores no array.
// Retorna um array exatamente do mesmo tamanho do original, porém com os valores alterados
// O método "map" em JavaScript é utilizado para percorrer um array e aplicar uma função a cada elemento desse array, criando um novo array com os resultados obtidos.

const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];
// Dobre os números do array acima

const dobrarNumeros = numeros.map(function (valor, indice, array) {
    console.log(indice)
    return valor * 2;
})
console.log(dobrarNumeros);
// Neste exemplo, o método "map" é utilizado para criar um novo array com o dobro de cada elemento do array "numeros". A função passada como argumento para o método "map" recebe cada elemento do array "numeros" como parâmetro e retorna o seu dobro, que será adicionado ao novo array "dobro".
// Logo, retornamos o dobro dos valores e ainda o indice de cada valor, este último através do console