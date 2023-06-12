// ./CepService.ts
import ICep from './ICep';

class CepService {
  private readonly cepApi: ICep;

  constructor(fooCep: ICep) {
    this.cepApi = fooCep;
  }

  addressByCep(cep: string, num: number) {
    return this.cepApi.getAddressByCEP(cep, num);
  }

  cepByAddress(address: string, num: number) {
    return this.cepApi.getCepByAddress(address, num);
  }
}

export default CepService;