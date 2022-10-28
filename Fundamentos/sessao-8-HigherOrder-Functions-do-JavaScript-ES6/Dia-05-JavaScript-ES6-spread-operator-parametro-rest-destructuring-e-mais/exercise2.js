// Crie uma função sum que dado um número ilimitado de parâmetros retorna a soma desses parâmetros. Ao chamar a função dessa forma : sum(4,5,6) o número 15 deve ser retornado.
// De olho na dica 👀: use o parâmetro rest.

const sum = (...args) => {
  return  args.reduce((acc, currValue) => {
    return acc + currValue;
  });
};

console.log(sum(4,5,6));
