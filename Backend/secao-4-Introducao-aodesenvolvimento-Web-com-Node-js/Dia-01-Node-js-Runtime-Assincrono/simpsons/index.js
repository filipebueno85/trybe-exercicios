const fs = require('fs').promises;

async function readAll() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const nameList = simpsons.map(({id, name}) => {
    return `${id} - ${name}`;
  })
  // return nameList; 
  nameList.forEach((string) => console.log(string));
};

const main = async () => {
  console.log(await readAll());
}

main();


