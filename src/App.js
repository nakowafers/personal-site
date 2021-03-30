import './App.css';
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const slogan = React.createRef();

  useEffect(() => {
    gsap.fromTo(slogan.current, { opacity: 0, y: -25 }, { opacity: 1, duration: 3, delay: 2, y: 0 });
  });

  return (
    <div className="App">
      <Header />
      <section className="hero">
        <h1 ref={slogan} className="slogan">Create.</h1>
      </section>
      <section className="head-shot">
        <img src="images/head_Shot.jpeg" alt="head_shot" />
        <h1>too busy working on your stuff<span>.</span></h1>
        <h2>more coming <span>soon...</span></h2>
      </section>
      <Footer />
    </div>
  );
}

export default App;
