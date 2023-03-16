import React from 'react';
import Swal from 'sweetalert2';
import useFormInput from './hooks/useFormInput';
import './style.css';

function App() {
  const firstName = useFormInput('');
  const lastName = useFormInput('');
  const email = useFormInput('');
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [email, setEmail] = useState('');

  // function handleFirstNameChange(e) {
  //   setFirstName(e.target.value);
  // }

  // function handleLastNameChange(e) {
  //   setLastName(e.target.value);
  // }

  // function handleEmailChange(e) {
  //   setEmail(e.target.value);
  // }

  function handleSubmit(e) {
    e.preventDefault();

    Swal.fire(
      'Formulário enviado',
      JSON.stringify({
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        // firstName,
        // lastName,
        // email,
      }),
      'success'
    );
    firstName.clear();
    lastName.clear();
    email.clear();
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label onSubmit={handleSubmit}>
          First name:
          <input value={firstName.value} onChange={firstName.onChange} />
          {/* <input value={firstName} onChange={handleFirstNameChange} /> */}
        </label>
        <label>
          Last name:
          <input value={lastName.value} onChange={lastName.onChange} />
          {/* <input value={lastName} onChange={handleLastNameChange} /> */}
        </label>
        <label>
          E-mail:
          <input value={email.value} onChange={email.onChange} />
          {/* <input value={email} onChange={handleEmailChange} /> */}
        </label>
        <button type="submit">Submeter formulário</button>
      </form>
    </div>
  );
}

export default App;
