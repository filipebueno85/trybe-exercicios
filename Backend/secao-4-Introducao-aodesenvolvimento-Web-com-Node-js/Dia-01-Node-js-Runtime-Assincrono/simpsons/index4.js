const fs = require('fs').promises;

const newSimpsonsJ = async () => {
  const fileContent = await fs.readFile('./simpsons.json', 'utf8');
  const simpsons = JSON.parse(fileContent);
  const idArray = [1, 2, 3, 4];
  const simpsonsFilter = simpsons.filter((simpson) => idArray.includes(+(simpson.id)));
  await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonsFilter));
};

const main = () => {
  newSimpsonsJ();
}

main();