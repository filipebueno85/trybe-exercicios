import Client from './Client';
import Item from './Item';
import Order from './Order';

const client = new Client('João');

const sandwich = new Item('Sanduíche Natural', 5.00);
const juice = new Item('Suco de Abacaxi', 5.00);
const dessert = new Item('Gelatina de Uva', 2.50);

const order = new Order(client, [sandwich, juice, dessert], 'dinheiro', 0.10);

console.log(order);

// import Client from './Client';
// import ItemDoPedido from './ItemDoPedido';
// import Pedido from './Item';

// const cliente = new Client('Genivaldo');
// const item1 = new ItemDoPedido('Açaí', 10);
// const item2 = new ItemDoPedido('Batata Frita', 20);
// const pedido = new Pedido(cliente, [item1, item2], 'dinheiro', 0.1);
// console.log(pedido.totalComDesconto());