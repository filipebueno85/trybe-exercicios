function verificaPalindromo(palavra) {
    for (let index in palavra) {
        if (palavra[index] != palavra[(palavra.length -= 1) - index]) {
            return false;
        } 
    }
    return true
}
  

console.log(verificaPalindromo('arara'));
console.log(verificaPalindromo('paralelepipedo'));

function verificaPalindromo2 (palavra) {
    let reverse = palavra.split('').reverse().join('');
    if (reverse === palavra) {
        return true;
    } else {
        return false;
    }
}

console.log(verificaPalindromo2('arara'));
console.log(verificaPalindromo2('paralelepipedo'));

