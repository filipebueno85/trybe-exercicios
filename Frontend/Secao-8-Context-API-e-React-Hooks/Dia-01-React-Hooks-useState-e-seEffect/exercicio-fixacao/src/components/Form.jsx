import { useState } from 'react';

function Form() {
  // const [name, setName] = useState('');
  // const [age, setAge] = useState('');
  // const [city, setCity] = useState('');
  // const [module, setModule] = useState('');

  const [ form, setForm ] = useState({ name: '', age: '', city: '', module: ''});

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <form>
      <fieldset className="dados-pessoais">
        <legend>Dados Pessoais</legend>
        <input
          type="text"
          value={form.name}
          name="name"
          placeholder="Nome Completo"
          id=""
          onChange={ handleChange }
          // onChange={({ target }) => setName(target.value)}
          />
        <input
          type="number"
          value={form.age}
          name="age"
          placeholder="Idade"
          id=""
          onChange={ handleChange }
          // onChange={({ target }) => setAge(target.value)} 
          />
        <input
          type="text"
          name="city"
          value={form.city}
          placeholder="Cidade"
          id=""
          onChange={ handleChange }
          // onChange={({ target }) => setCity(target.value)}
        />
      </fieldset>
      <fieldset className="modulos">
        <legend>Módulo</legend>
        <label htmlFor="fundamentos">
          Fundamentos
          <input 
          type="radio" 
          name="module"
          value="fundamentos"
          checked={ form.module === "fundamentos" }
          onChange={ handleChange }
          // onChange={ ({ target }) => setModule(target.value) }
          id="fundamentos" />
        </label>
        <label htmlFor="frontend">
          Front-end
          <input 
          type="radio" 
          name="module"
          value="frontend"
          checked={ form.module === "frontend" }
          onChange={ handleChange }
          // onChange={ ({ target }) => setModule(target.value) }
          id="frontend" />
        </label>
        <label htmlFor="backend">
          Back-end
          <input 
          type="radio" 
          name="module"
          value="backend"
          checked={ form.module === "backend" }
          onChange={ handleChange }
          // onChange={ ({ target }) => setModule(target.value) } 
          id="backend" />
        </label>
        <label htmlFor="cincia-da-computacao">
          Ciência da Computação
          <input 
          type="radio" 
          name="module"
          value="cincia-da-computacao"
          checked={ form.module === "cincia-da-computacao" }
          onChange={ handleChange }
          // onChange={ ({ target }) => setModule(target.value) } 
          id="cincia-da-computacao" />
        </label>
      </fieldset>
      <button
        type="submit"
        onClick={(event) => {
          event.preventDefault();
          console.log('Click!');
        }}
      >
        Enviar
      </button>
    </form>
  );
}

export default Form;
