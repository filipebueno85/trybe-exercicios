const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

// Considere o seguinte array e manipule-o utilizando reduce para fazer o que é pedido:
// Crie uma string com os nomes de todas as pessoas autoras.

const reduceNames = (array) => {
  return array.reduce((acc, currValue) => `${acc}, ${currValue.author.name}`
, '')}

// console.log(reduceNames(books));

const expectedResult = 43;

// Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

const averageAge = (array) => {
  return array.reduce((acc, currValue) => {
    return acc + currValue.releaseYear - currValue.author.birthYear;
  }, 0) / array.length;
}
// console.log(averageAge(books));

// function averageAge() {
//   const numberOfBooks = books.length;
//   const sumOfAges = books.reduce((sum, book) => (
//     sum + (book.releaseYear - book.author.birthYear)
//   ), 0);
//   return sumOfAges / numberOfBooks;
// }

// Encontre o livro com o maior nome.
const longestNamedBook = (array) => {
  return array.reduce((acc, currValue) => {
    return acc.name.length > currValue.name.length ? acc : currValue;
  }, array[0]);
}
console.log(longestNamedBook(books));

// function longestNamedBook() {
//   return books.reduce((biggestBook, currentBook) => {
//     if (currentBook.name.length > biggestBook.name.length) {
//       return currentBook;
//     }
//     return biggestBook;
//   });
// }

