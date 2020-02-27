/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myarray = ["Victor", 28, true, null, undefined];


/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
//

function itArray(arg){
  return arg;
};

itArray(myarray);

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
//
console.log(itArray(myarray)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
//

function newFunction(arr, index){ 
  return arr[index];
};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
//

var myarray2 = ['Victor', 11.8, true, [2,3, 'De Abreu'], { a: 28 } ];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
//

console.log(newFunction(myarray2, 0));
console.log(newFunction(myarray2, 1));
console.log(newFunction(myarray2, 2));
console.log(newFunction(myarray2, 3));
console.log(newFunction(myarray2, 4));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
//
libro {

};

function book(bookName){
  var allBooks = {
    "Dona Barbara" : {
      quantidadeDePaginas : 350,
      autor : "Romulo Gallegos",
      editora : "Araluce"
    },
    "Intermitencias de la muerte" : {
      quantidadeDePaginas : 250,
      autor : "Jose Saramago",
      editora : "Harcourt"
     },
    "Cien anos de soledad" : {
      quantidadeDePaginas : 420,
      autor : "Gabriel García Marquez",
      editora : "Planeta"
    }
  }
  
  return !bookName ? allBooks : allBooks[bookName];
};

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
//
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:

*/
//
console.log('O livro Dona Barbara tem ' + book("Dona Barbara").quantidadeDePaginas + ' paginas!')

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
//
var bookname = "Dona Barbara";
console.log('O autor do livro' + bookname + ' é ' + book("bookname").autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
//

console.log('O livro ' + bookname + ' foi publicado pela editora ' + book(bookname).editora + '.');
