import React from 'react';
import './App.scss';
import Header from './components/header';
import Section1 from './components/section1';

function App() {
  return (
    <div className="App">
      <Header />
      <Section1 />
    </div>
  );
}

export default App;

global.getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}