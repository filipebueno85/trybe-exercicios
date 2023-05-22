// ./index.ts

import users from './data';
import * as Functions from './myFunctions';

console.log(`Lista de pessoas usuárias do Github: ${Functions.getUserNames(users)}.`);

console.log(
  `Pessoas com pelo menos 20 repositórios: ${Functions.getUsersByRepoQuantity(users, 20)}.`,
);

console.log(
  `Essa é a conta mais ativa da lista? ${Functions.IsMostActiveUser('João Paulo Aramuni', users)}.`,
);