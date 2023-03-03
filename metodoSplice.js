// O método splice() altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.
// Retorna uma lista contendo os elementos removidos. Se apenas um elemento é removido, por exemplo, uma lista contendo apenas um elemento é retornada. Se nenhum elemento é removido, uma lista vazia é retornada.

// Exemplo


// No primeiro argumento, eu passo o índice que quero começar a mexer. No segundo argumento, passo quantos elementos eu quero remover do array
// Exemplo: nomes.splice(indice, quantoElementosQueroApagar)
// Eu ainda posso adicionar elementos, recebendo como parâmetros do método splice os elementos para adicionar, exemplo:
// nomes.splice(indice, quantosElementosQueroApagar, elementoParaAdd1, elementoParaAdd2, elementoParaAdd3);
const nomes = ['Rodrigo', 'Lucas', 'João', 'Maria']
const removidos = nomes.splice(2, 1);
console.log(nomes, removidos);
// No exemplo acima, nós passamos o índice que quero mexer, depois passamos o elemento que eu quero apagar. No caso, eu retirei do array o João, e foi retornado um novo array com o elemento excluído.
// Ou seja, simplificando, eu quis remover "do índice 2, 1 elemento."

// Agora vamos adicionar elementos através do método splice():
const nomes2 = ['Rodrigo', 'Lucas', 'João', 'Maria']
const adicionados = nomes2.splice(3, 0, 'Rodrigo2', 'Marcos', 'Otávio')
console.log(nomes2, adicionados)
// Ou seja, a partir do índice 3, adicione os elementos que eu especifiquei, e não remova nennum (o zero representa isso, não remover nenhum)

// Também posso trocar elementos do array, a exemplo:
const nomes3 = ['Rodrigo', 'Lucas', 'João', 'Maria']
const substituidos = nomes3.splice(3, 1, 'Novo Integrante')
console.log(nomes3, substituidos)
// Perceba que a Maria foi substituida pelo novo integrante nesse caso, e retornado a Maria em um novo array, que seriam os substituidos.

// Simulando o método pop() dentro do splice():
const nomes4 = ['Rodrigo', 'Lucas', 'João', 'Maria']
const removidos2 = nomes4.splice(3, 1)
console.log(nomes4, removidos2)
// Logo, removi a Maria nesse caso, e retornou o array com a pessoa que foi removida. 
// Interpretando, do índice 3, remova 1

// Simulando o método shift() com splice():
const nomes5 = ['Rodrigo', 'Lucas', 'João', 'Maria']
const removidos3 = nomes5.splice(0, 1)
console.log(nomes5, removidos3)
// Ou seja, do índice 0, remova 1
