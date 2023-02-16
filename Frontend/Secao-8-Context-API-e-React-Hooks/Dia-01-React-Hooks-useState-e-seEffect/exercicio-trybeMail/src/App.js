import { useEffect, useState } from 'react';
import './App.css';
import Email from './components/Email';

const INITIAL_STATE = [
  {
    id: 1,
    title: 'Mercado livre: Aproveite as ofertas de fevereiro!!',
    status: 0
  },
  {
    id: 2,
    title: 'Agenda: Horario mentoria Bruno Pessoa: 9:00',
    status: 0
  },
  {
    id: 3,
    title: 'Você ganhou 1 milhão!!',
    status: 0
  }
]

function App() {
  const [emailList, setEmailList] = useState(INITIAL_STATE);
  // const [ nome, setEmail ] = useState();
  // const [ emailStyle, setEmailStyle ] = useState('nao-lido');

  useEffect(() => {
    window.alert('Bem-vindo!')
  }, []); // didMount

  useEffect(() => {
    if (emailList.every((e) => e.status === 1)) {
      return alert('Parabéns! Você leu todas suas mensagens!');
    } 
  
  }, [emailList]); // didUpdate

   const handleAllEmails = (newStatus) => {
    const allEmails = emailList.filter((e) => {
      e.status = newStatus;
      return e;
    })
    setEmailList(allEmails);
  };

  const handleMail = (id, newStatus) => {
    const newEmail = emailList.map((e) => {
      if (e.id === id) {
        e.status = newStatus;
      }
      return e;
    })
    setEmailList(newEmail);
  }

  // const handleDeleteEmail = () => {
  //   setEmailList([]);
  // }

  return (
    <section>
      <header>
        <h1>TrybeMail</h1>
      </header>
      <div>
        <button onClick={() => handleAllEmails(1)}>Marcar todas como Lidas</button>
        <button onClick={() => handleAllEmails(0)}>Marcar todas como não Lidas</button>
        {emailList.map((e) => (
         <Email
         key={e.id}
         handleMail={ handleMail }
         emailList={ emailList }
         id={ e.id }
         />
        ))}
        {/* <button onClick={ handleDeleteEmail }>Excluir Todos os E-mails</button> */}
      </div>
    </section>
  );
}

export default App;
