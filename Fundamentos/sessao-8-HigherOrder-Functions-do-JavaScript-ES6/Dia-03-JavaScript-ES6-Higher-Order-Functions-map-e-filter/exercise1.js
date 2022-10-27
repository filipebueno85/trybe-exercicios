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



const formatedBookNames = (array) => array.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);
// console.log(formatedBookNames(books));

// Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age, com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha, considerando suas idades quando o livro foi lançado.

const nameAndAge = (array) => array.map((book) => {
    return {
      age: (book.releaseYear - book.author.birthYear),
      author: book.author.name,
    }
  }).sort((a, b) => a.age - b.age);
// const result = nameAndAge(books);
// console.log(nameAndAge(books));

// Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.

const fantasyOrScienceFiction = (array) => array.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica');
// console.log(fantasyOrScienceFiction(books));

// Crie um array formado pelos livros com mais de 60 anos desde sua publicação. Esse array deve ser ordenado do livro mais velho ao mais novo.

const oldBooksOrdered = (array) => {
  return array.filter((book) => {
    return new Date().getFullYear() - book.releaseYear > 60;
  }).sort((a, b) => a.releaseYear - b.releaseYear);
}
// console.log(oldBooksOrdered(books));

// Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

const fantasyOrScienceFictionAuthors = (array) => {
  return array.filter((book) => {
    return book.genre === 'Fantasia' || book.genre === 'Ficção Científica';
    
  }).map((book) => book.author.name).sort();
}
// console.log(fantasyOrScienceFictionAuthors(books));

// Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

const oldBooks = (array) => {
  return array.filter((book) => {
    return new Date().getFullYear() - book.releaseYear > 60;
  }).map((book) => book.name); 
}
// console.log(oldBooks(books));

// Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.

// const authorWith3DotsOnName = (array) => {
//   return array.filter((book) => {
//     return book.author.name.startsWith('J. R. R.');
//   }).map((book) => book.name);
// }
// console.log(authorWith3DotsOnName(books));

// const authorWith3DotsOnName = (array) => {
//   return array.find((book) => {
//     return book.author.name.startsWith('J. R. R.');
//   }).name;
// }
// console.log(authorWith3DotsOnName(books));

const authorWith3DotsOnName = (array) => {
  return array.filter((book) => {
    return book.author.name.startsWith('J. R. R.')
  })[0].name;
}
console.log(authorWith3DotsOnName(books));

// function authorWith3DotsOnName() {
//   return books.find((book) => /([A-Z][.][ ]){3}/.test(book.author.name));
//  }