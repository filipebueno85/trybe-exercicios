const fs = require('fs').promises;

async function readAll(id) {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const findSimpson = simpsons.find((simpson) => Number(simpson.id) === id);
  
  if (!findSimpson) {
    throw new Error('id não encontrado');
  }
  return findSimpson;
};

const main = async () => {
   const simp = await readAll(20);
   console.log(simp);
}

main();
