export default class Item {
  private _name: string;
  private _price: number;

  constructor(name: string, price: number) {
    this._name = name;
    this._price = price;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (value.length < 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres.');
    }

    this._name = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    if (value < 0) throw new Error('O preço deve ser positivo.');

    this._price = value;
  }
}

// import Client from './Client';
// import ItemDoPedido from './ItemDoPedido';

// export default class Pedido {
//   cliente: Client;
//   itensConsumidos: ItemDoPedido[];
//   formaPagamento: string;
//   percentualDesconto: number = 0;

//   constructor(c: Client, ic: ItemDoPedido[], fp: string, pd: number) {
//     this.cliente = c;
//     this.itensConsumidos = ic;
//     this.formaPagamento = fp;
//     this.percentualDesconto = pd;
//   }

//   totalPedido(): number {
//     return this.itensConsumidos.reduce((acc, cv) => {
//       acc += cv.preco;
//       return acc;
//     }, 0);
//   }

//   totalComDesconto(): number {
//     const totalComDesconto = this.totalPedido() - (this.percentualDesconto * this.totalPedido());
//     return totalComDesconto;
//   }
// }