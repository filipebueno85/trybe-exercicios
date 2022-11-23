import './App.css';
import React from 'react';
import Image from './Image';
import catImage from './cat-2083492_1280.jpg';

class App extends React.Component {
  render() {
  return (
    <main>
    <Image source={ catImage } alternativeText= "Cute cat staring" />
    </main>
 )
  }
}

export default App;

// import React from 'react';
// import Image from './Image';

// function App() {
//   const URL = 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg';
//   return (
//     <main>
//       <Image source={ URL } alternativeText="Cute cat staring" />
//     </main>
//   );
// }

// export default App;
