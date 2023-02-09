import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './assets/css/bootstrap.min.css';
import './App.css';

/**Components */
import Header from './assets/components/Header/Header'
import Hero from './assets/components/Hero/Hero';
import Caracter from './assets/components/Caracter/Caracter';


function App() {

  return (
    <div className="App">
      <Header />
      <Hero />
      <Caracter />
    </div>
  )
}

export default App
