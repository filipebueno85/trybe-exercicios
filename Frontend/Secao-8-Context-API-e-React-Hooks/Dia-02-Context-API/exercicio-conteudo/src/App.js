import React from 'react';
import './App.css';
import Footer from './components/Fotter';
import Header from './components/Header';
import Image from './components/Image';
import ThemeProvider from './context/ThemeProvider';

export default function App() {
  return (
    <ThemeProvider>
      <Header />
      <Image />
      <Footer />
    </ThemeProvider>
  );
}



// // /src/App.js
// import React, { useState } from 'react';
// import './App.css';
// import Footer from './components/Fotter';
// import Header from './components/Header';
// import Image from './components/Image';

// import ThemeContext from './context/ThemeContext';

// export default function App() {
//   const [themeColor, setThemeColor] = useState('dark');

//   function toggleTheme() {
//     setThemeColor(themeColor === 'dark' ? 'light' : 'dark');
//   }

//   return (
//     <ThemeContext.Provider value={{ color: themeColor, toggleTheme }}>
//       <div className={`app ${themeColor}`}>
//         <Header />
//         <Image />
//         <Footer />
//       </div>
//     </ThemeContext.Provider>
//   );
// }