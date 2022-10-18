const substituaX = (nome) => {
    const frase = 'Tryber x aqui!';
    return frase.split('x').join(nome);
};
// console.log(substituaX('coisa'));

// const minhasSkills = (func1) => {
//     const skills = ['JavaScript', 'HTML', 'CSS'];
//     let resultado = `${func1}
//     Minhas três principais Habilidades são:
//     ${skills
//     [0]}
//     ${skills[1]}
//     ${skills[2]}`;
//     return resultado;
// };

const minhasSkills = (func1) => {
    const skills = ['JavaScript', 'HTML', 'CSS'];
    let resultado = `${func1}
    Minhas três principais Habilidades são:`;
    for (let index = 0; index < skills.length; index += 1) {
        resultado = `${resultado}
    ${skills[index]}`;
    }
    return resultado;
};

console.log(minhasSkills(substituaX("coisa")));

