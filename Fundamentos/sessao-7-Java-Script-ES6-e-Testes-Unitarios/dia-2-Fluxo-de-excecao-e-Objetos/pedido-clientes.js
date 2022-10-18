const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const nomeCliente = order['name'];
  const telefone = order['phoneNumber'];
  const rua = order['address']['street'];
  const numero = order['address']['number'];
  const apartamento = order['address']['apartment'];
  const atendente = order.order.delivery.deliveryPerson;

  return `Olá, ${atendente}, entrega para: ${nomeCliente} Telefone ${telefone} R ${rua} Nº: ${numero} Apartamento: ${apartamento}`;


};

customerInfo(order);
// Complete a função orderModifier() para que seu retorno seja similar a “Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.”

// Modifique o nome da pessoa compradora.
// Modifique o valor total da compra para R$ 50,00.
const orderModifier = (order) => {
  const nomeLuiz = order.name = 'Luiz Silva';
  const novoValor = order.payment.total = 50;
  const pizzas = Object.keys(order.order.pizza);
  const refrigerante = order.order.drinks.coke.type;


  return `Olá ${nomeLuiz} o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${refrigerante} é R$ ${novoValor},00.`;

};

console.log(orderModifier(order));