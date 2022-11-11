import "./style.css";
import Swal from 'sweetalert2'

// const carta = document.querySelector('.card');
const imagemSH = document.getElementById('image');
const nomeSH = document.getElementById('name');
const botao = document.getElementById('button');

const acess_token = '3462777123963310';
const url_API = `https://www.superheroapi.com/api.php/${acess_token}`;

const nuemeroAleatorio = () => Math.floor(Math.random() * 800);
botao.addEventListener('click', (event) => {
  event.preventDefault();
  const id = nuemeroAleatorio();
  fetch(`${url_API}/${id}`).then((response) => response.json()).then((data) => {
    imagemSH.src = data.image.url;
    localStorage.setItem('imagem', JSON.stringify(data.image.url));
    nomeSH.innerHTML = data.name; 
  }).catch((error) => {
    alert('Esse personagem não existe');
  })
});

imagemSH.src = JSON.parse(localStorage.getItem('imagem'));

