// Utilize switch/case para fazer um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

// Exemplo: bishop (bispo) -> diagonals (diagonais)

const pecaDeXadrez = 'rainha';

switch (pecaDeXadrez.toLowerCase()) {
    case 'rei':
        console.log('Rei - anda uma casa em qualquer direção');
        break;
    case 'rainha':
        console.log('Rainha - Diagonal - Horizontal - vertical - movimento continuo');
        break;
    case 'peão':
        console.log('Peão - anda uma casa para frente, podendo andar duas casas na primeira jogada');
        break;
    case 'cavalo':
        console.log('Cavalo - faz movimentos em L porem posicionando em uma casa vazia');
        break;
    case 'bispo':
        console.log('Bispo - faz movimentos na diagonal -movimento continuo');
        break;
    case 'torre':
        console.log('Torre - faz movimentos continuos na horizontal e vertical');
        break;
    default:
        console.log('peça invalida');
        break;



    
    
}