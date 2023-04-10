const readline = require('readline-sync');

// const pesoKg = 108
// const alturaCm = 180

const BMI_MAX_AND_MIN = {
  'Underweight': {
    minBMI: 0,
    maxBMI: 18.4,
  },
  'Normal Weight': {
    minBMI: 18.5,
    maxBMI: 24.9,
  },
  'Overweight': {
    minBMI: 25,
    maxBMI: 29.9,
  },
  'Obese Class I': {
    minBMI: 30.0,
    maxBMI: 34.9,
  },
  'Obese Class II': {
    minBMI: 35,
    maxBMI: 39.9,
  },
  'Obese Class III': {
    minBMI: 40,
    maxBMI: 100, // Um valor default máximo qualquer, impossível de alcançar no imc.
  },
};

const calcularBMI = (peso, altura) => {
 const alturaMetro = altura / 100;
 const alturaAoQuadrado = alturaMetro ** 2

  const BMI = peso / alturaAoQuadrado;

  return BMI;
}

function handleBMIResult(bmi) {
  const statuses = Object.keys(BMI_MAX_AND_MIN); // ['Underweight', 'Normal Weight', 'Overweight'...]

  const resultFind = statuses.find((status) => {
    const { maxBMI, minBMI } = BMI_MAX_AND_MIN[status]; // acessamos as informações do intervalo da situação iterada

    // caso esteja dentro do intervalo, significa que encontramos a situação apropriada
    return bmi >= minBMI && bmi <= maxBMI;
  });

  return resultFind;
}

function main() {
  const pesoInput = readline.questionFloat('Qual seu Peso (em kg)? ');
  const alturaInput = readline.questionInt('Qual sua Altura (em cm )? ');
  
  const bmi = calcularBMI(pesoInput, alturaInput);
  const bmiResult = handleBMIResult(bmi);
  console.log(`BMI: ${bmiResult}`);
  console.log(`bmiResult`)
}

main();

