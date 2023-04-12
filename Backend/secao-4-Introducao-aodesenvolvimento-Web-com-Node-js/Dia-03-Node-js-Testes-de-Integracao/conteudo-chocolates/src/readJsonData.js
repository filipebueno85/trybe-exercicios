const fs = require('fs').promises;

const readJsonData = async (path) => {
  const content = await fs.readFile(path, 'utf-8');
  const json = JSON.parse(content);

  return json;
};

module.exports = readJsonData;
