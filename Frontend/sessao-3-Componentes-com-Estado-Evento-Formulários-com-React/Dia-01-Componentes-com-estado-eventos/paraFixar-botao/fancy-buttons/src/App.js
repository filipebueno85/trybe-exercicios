import React from 'react';
import './App.css';

class App extends React.Component {
  // constructor() {
  //   super();
  //   /* Para definir um estado inicial ao componente, a ser definido
  //   no momento em que o componente for colocado na tela, faça uma atribuição
  //   de um objeto à chave `state` do `this`, ou seja, ao `this.state` */
  //   this.state = {
  //     contador: 0,
  //     contador1: 0,
  //     contador2: 0,
  //   };
  //   this.handleClick = this.handleClick.bind(this);
  // }
state = {
  contador: 0,
  contador1: 0,
  contador2: 0,
}

    handlerClick = () => {
      console.log(this);
      this.setState((estadoAnterior, _props) => ({
        contador: estadoAnterior.contador + 1,
      }));
    };
    
    handlerClick2 = () => {
      console.log(this);
      this.setState((estadoAnterior, _props) => ({
        contador1: estadoAnterior.contador1 + 1,
      }));
    };
    
    handlerClick3 = () => {
      console.log(this);
      this.setState((estadoAnterior, _props) => ({
        contador2: estadoAnterior.contador2 + 1,
      }));
    };

    getButtonColor(num) {
      return num % 2 === 0 ? 'green' : 'white';
    };

  render() {
    const { contador, contador1, contador2 } = this.state;
  return (
    <div className="App">
      <button onClick={ this.handlerClick }  style={ { backgroundColor: this.getButtonColor(contador) } }>{`Clique aqui ${contador}`}</button>
      <button onClick={ this.handlerClick2 } style={ { backgroundColor: this.getButtonColor(contador1) } }>{`Clique aqui tambem ${contador1}`}</button>
      <button onClick={ this.handlerClick3 } style={ { backgroundColor: this.getButtonColor(contador2) } }>{`Clique aqui de novo ${contador2}`}</button>
    </div>
  );
  }
}



// --------- COM BIND -----------------

// class App extends React.Component {
//   constructor() {
//     super()
//     this.handlerClick = this.handlerClick.bind(this);
//     this.handlerClick2 = this.handlerClick2.bind(this);
//     this.handlerClick3 = this.handlerClick3.bind(this);
//   }
//   handlerClick() {
//     console.log('clicou');
//   };
  
//   handlerClick2() {
//     console.log('clicou aqui de novo');
//   };
  
//   handlerClick3() {
//     console.log('clicou né');
//   };
  
//   render() {
//     return (
//       <div className="App">
//       <button onClick={ this.handlerClick }>Clique aqui</button>
//       <button onClick={ this.handlerClick2 }>Clique aqui tambem</button>
//       <button onClick={ this.handlerClick3 }>Clique aqui de novo</button>
//     </div>
//   );
// }
// }

// const handlerClick = () => {
  //   console.log('clicou');
  // };
  
  // const handlerClick2 = () => {
    //   console.log('clicou aqui de novo');
    // };
    
    // const handlerClick3 = () => {
      //   console.log('clicou né');
      // };
      
      // class App extends React.Component {
        //   render() {
          //   return (
            //     <div className="App">
            //       <button onClick={ handlerClick }>Clique aqui</button>
            //       <button onClick={ handlerClick2 }>Clique aqui tambem</button>
            //       <button onClick={ handlerClick3 }>Clique aqui de novo</button>
            //     </div>
            //   );
            //   }
            // }
            
            export default App;