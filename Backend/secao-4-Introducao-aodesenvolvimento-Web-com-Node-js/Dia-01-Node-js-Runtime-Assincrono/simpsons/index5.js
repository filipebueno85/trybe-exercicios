const fs = require('fs').promises;
// Nelson Muntz

const addCharacter = async () => {
  const fileContent = await fs.readFile('./simpsonFamily.json', 'utf8');
  const simpsons = JSON.parse(fileContent);
  simpsons.push({id: '5', name: 'Nelson Muntz'});

  await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsons));
};

const main = async () => {
  addCharacter();
};

main();
