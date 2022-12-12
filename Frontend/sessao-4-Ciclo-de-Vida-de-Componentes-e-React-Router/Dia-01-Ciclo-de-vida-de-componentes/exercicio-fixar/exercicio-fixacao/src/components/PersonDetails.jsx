import React from 'react';
import Card from './Card';
import Loading from './Loading';

class PersonDetails extends React.Component {
  state = {
    person: [],
    loading: true,
    nome:'',
  }

  componentDidMount() {
    this.setState(
      { loading: true },
      async () => {
        const url = ' https://api.randomuser.me/';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
          person: data.results,
          loading: false,
         })
      },
    );
  };

  getUserElements = ({name: { last, first } , email, dob: { age }, picture }) => {
    return {
      name: `${first} ${last}`,
      email: email,
      age: age,
      image: picture,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (!nextState.loading) {
      const ageVal = nextState.person[0];
      const { dob: { age } } = ageVal;
      if (age <= 50 ) {
        // alert(`${age} idade nao encontrada`);
      } 
      return age > 50 ? true : false;  
    }
  }
  //  componentDidUpdate(prevProps, prevState) {
  //     if(this.state.nome === '') this.setState({nome: 'teste'});
  //  }
  render() {
    const { loading, person } = this.state;
    if (loading) return <Loading />;
    return (
      <div>
        <Card person={ this.getUserElements(person[0]) }/>
      </div>
   )
  }
}

export default PersonDetails;
