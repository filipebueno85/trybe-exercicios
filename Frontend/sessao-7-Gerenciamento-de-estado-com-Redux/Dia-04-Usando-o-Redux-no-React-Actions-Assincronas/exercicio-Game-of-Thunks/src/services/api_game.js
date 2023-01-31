export const fetchGame_Api = async (nome_personagem) => {
  const URL = `https://anapioficeandfire.com/api/characters?name=${nome_personagem}`
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}
