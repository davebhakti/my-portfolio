import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import './App.css';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero/>
        <Experience/>
      </main>
    </div>
  );
}

export default App;