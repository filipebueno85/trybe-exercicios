import { useEffect, useState } from 'react';

function Email({emailList, handleMail, id }) {
const [ emailStyle, setEmailStyle ] = useState('nao-lido');
const [ email, setEmail ] = useState({});

  useEffect(() => {
    const currentEmail = emailList.find((e) => e.id === id);
    setEmail(currentEmail);
    if (currentEmail.status === 0) {
      setEmailStyle('nao-lido');
    } else {
      setEmailStyle('lido');
    }
  }, [emailList, id]);

  // useEffect(() => {
  //   return () => {
  //     window.alert('caixa de entrada vazia!')
  //   }
  // }, []); // willUnMount

  return (
    <div className="container">
      {/* <p className={emailStyle}>{email.status === 0 ? 'não lido' : 'lido'}</p> */}
      <p className={`${emailStyle} container-email`}>{email.title}</p>
      <button onClick={() => handleMail(email.id, 1)}>Abrir</button>
      <button onClick={() => handleMail(email.id, 0)}>Fechar</button>
    </div>
  )
}

export default Email;