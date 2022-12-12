import PropTypes from 'prop-types';
import React from 'react';

class Card extends React.Component {
  render() {
    const { person: { name, image, age, email }  } = this.props;
    return(
   <div>
    <p>{ name }</p>
    <p>{ age }</p>
    <p>{ email }</p>
    <img src={ image } alt={ name } />
   </div>
    )
  }
}

export default Card;

Card.propTypes = {
person: PropTypes.shape(
{name: PropTypes.string,
age: PropTypes.number,
email: PropTypes.string,
image: PropTypes.string,
}).isRequired
};
