import CepService from './CepService';
import MockCepApi from './MockCepApi';

async function main() {
  const cepSvc = new CepService(new MockCepApi());

  console.log(
    'get address by cep',
    '->',
    await cepSvc.addressByCep('xx.xxx-xx', 10),
  );
  console.log(
    'get cep by address',
    '->',
    await cepSvc.cepByAddress('street foo, between bar and baz', 10),
  );
}

main();


// import FuturisticCar from './FuturisticCar';

// async function main() {
//   const futuristic = new FuturisticCar();
//   console.log(await futuristic.drive());
//   console.log(await futuristic.fly());
// }
// main();

// // ./index.ts
// import CepService from './CepService';
// import FooCepAPI from './FooCepAPI';

// async function main() {
//   const foocep1 = new FooCepAPI();
//   const cepSvc = new CepService(foocep1);

//   console.log(
//     'get address by cep', 
//     '->', 
//     await cepSvc.addressByCep('xx.xxx-xx', 10),
//   );
//   console.log(
//     'get cep by address', 
//     '->', 
//     await cepSvc.cepByAddress('street foo, between bar and baz', 10),
//   );
// }

// main();