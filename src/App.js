import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import './App.css';
import Projects from './components/Project';
import Experience from './components/Experience';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero/>
        <Experience/>
        <Projects/>
        <About/>
      </main>
    </div>
  );
}

export default App;