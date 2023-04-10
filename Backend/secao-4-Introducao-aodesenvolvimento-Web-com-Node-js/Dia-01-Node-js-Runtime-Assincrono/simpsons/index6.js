const fs = require('fs').promises;

const changeCharacter = async () =>{
  const fileContent = await fs.readFile('simpsonFamily.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  console.log(simpsons);
  const removeNelson = simpsons.filter((simpson) => 
    Number(simpson.id) !== 5
  );
  console.log(removeNelson);
  // const addMaggie = removeNelson.concat([{id: '15', name: 'Maggie Simpson'}]);
  const addMaggie = [...removeNelson, {id: '6', name: 'Maggie Simpson'}];
  
   return fs.writeFile('./simpsonFamily.json', JSON.stringify(addMaggie));
};

function main() {
  changeCharacter();
};

main();
