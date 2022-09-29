// Acesse o elemento elementoOndeVoceEsta.

const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.

// const pai = elementoOndeVoceEsta.parentElement;
// pai.style.color = 'blue'; 


// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?

// const primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
// primeiroFilhoDoFilho.innerText = 'esse é o primeiro filho do filho'; 

// Acesse o primeiroFilho a partir de pai.

// const primeiroFilho = pai.firstElementChild;

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.

// const primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling;

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.

const atencao = elementoOndeVoceEsta.nextSibling;

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.

// const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;

// Agora acesse o terceiroFilho a partir de pai.

// const terceiroFilho2 = pai.lastElementChild.previousElementSibling;

// Crie um irmão para elementoOndeVoceEsta.

const pai2 = document.getElementById('pai');
const irmaoElementoOndeVoceEsta = document.createElement('section');
irmaoElementoOndeVoceEsta.id = 'irmaoElementoOndeVoceEsta';
pai2.appendChild(irmaoElementoOndeVoceEsta);

// Crie um filho para elementoOndeVoceEsta.
const elementoOndeVoceEsta2 = document.getElementById('elementoOndeVoceEsta');
const filhoElementoOndeVoceEsta = document.createElement('section');
filhoElementoOndeVoceEsta.id = 'filhoElementoOndeVoceEsta';
elementoOndeVoceEsta2.appendChild(filhoElementoOndeVoceEsta); 
// Crie um filho para primeiroFilhoDoFilho.
const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
const filhoPrimeiroFilhoDoFilho = document.createElement('section');
filhoPrimeiroFilhoDoFilho.id = 'filhoPrimeiroFilhoDoFilho';
primeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho);
// A partir desse filho criado, acesse terceiroFilho.
const terceiroFilho = filhoPrimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling;

console.log(terceiroFilho);