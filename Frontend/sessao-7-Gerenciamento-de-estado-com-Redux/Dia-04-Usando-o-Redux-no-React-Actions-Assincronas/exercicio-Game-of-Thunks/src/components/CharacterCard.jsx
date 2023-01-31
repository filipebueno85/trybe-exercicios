import React, { Component } from 'react';
import { connect } from 'react-redux';

class CharacterCard extends Component {
  render() {
    const { character, isLoading, error } = this.props;
    return (
      <div>
        { isLoading ? 
        (<h2>Carregando...</h2>) : 
        (
        <ul>
          {character&& (
            <div>

          <li>Name: {character.name}</li>
          <li>Born: {character.born}</li>
          <li>
            Titles:
            <ol>
              {character.titles.map((title, index) => (
                <li key={`${title}-${index}`}>{title}</li>
              ))}
            </ol>
          </li>
          <li>
            Aliases:
            <ol>
              {character.aliases.map((alias, index) => (
                <li key={`${alias}-${index}`}>{alias}</li>
              ))}
            </ol>
          </li>
            </div>
          )
          }
        </ul>)
        }
        {error && <p>Personagem não encontrado</p>}
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  character: state.gameReducer.character,
  error: state.gameReducer.error,
  isLoading: state.gameReducer.isLoading,
});

export default connect(mapStateToProps)(CharacterCard);
