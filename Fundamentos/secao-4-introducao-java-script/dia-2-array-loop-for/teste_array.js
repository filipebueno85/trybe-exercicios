// Obtenha o valor “Serviços” do array menu:

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

// Procure o índice do valor “Portfólio” do array menu:

// let indexOfPortfolio = menu[menu.length - 2]; para acessar nome do array
let indexOfPortfolio = menu.indexOf('Portfólio');


console.log(indexOfPortfolio);

// Adicione o valor “Contato” no final do array menu:
// De olho na dica 👀: Use o método .push()

menu.push('Contato');

console.log(menu);
