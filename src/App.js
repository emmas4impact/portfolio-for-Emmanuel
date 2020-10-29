import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Heading from './components/Heading'
import Skills from './components/Skills'
import About from './components/About'
import Projects from './components/Projects'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import "animate.css/animate.min.css";

function App() {
  return (
    <div>
       <Heading />
       <About />
       <Projects />
       <Skills />
       <Portfolio />
       <Footer />
       
    </div>
  );
}

export default App;
