// ./src/App.js
import React from 'react';
import { connect } from 'react-redux';
import CharacterCard from './components/CharacterCard';
import { fetchCharacter } from './redux/actions';
import "./style.css";

class App extends React.Component {
  state = {
    character: '',
    // title: '',
    // nickName: '',
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handeClick = () => {
    const { dispatch } = this.props;
    const { character } = this.state;
    dispatch(fetchCharacter(character));
  };

  render() {
    const { character} = this.state;
    return (
      <div>
      <input 
      type="text"
      name="character"
      value={character}
      onChange={ this.handleChange } 
      />
      <button type="button" onClick={ this.handeClick } >Pesquisar</button>
      <CharacterCard />
      </div>
    );
  }
}


export default connect()(App);
