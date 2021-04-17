import './App.css';
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import Header from './components/Header';
import Footer from './components/Footer';
import Stars from './components/Stars';

function App() {
  const slogan_1 = React.createRef();
  const slogan_2 = React.createRef();
  const slogan_3 = React.createRef();

  useEffect(() => {
    let t1 = gsap.timeline();
    t1.fromTo(slogan_1.current, { opacity: 0, y: 100 }, { opacity: 1, duration: 2, y: 0 });
    t1.to(slogan_1.current, { opacity: 0, y: -100, duration: 2 });
    t1.fromTo(slogan_2.current, { opacity: 0, y: 100 }, { opacity: 1, duration: 2, y: 0 });
    t1.to(slogan_2.current, { opacity: 0, y: -100, duration: 2 });
    t1.fromTo(slogan_3.current, { opacity: 0, y: 100 }, { opacity: 1, duration: 2, y: -20 });
  });

  return (
    <div className="App">
      <Header />
      <section className="hero">
        <h1 ref={slogan_1} className="slogan">Dream.</h1>
        <h1 ref={slogan_2} className="slogan">Innovate.</h1>
        <h1 ref={slogan_3} className="slogan">Create.</h1>
        <Stars />
      </section >
      <section className="services">
        <div>
          <h2>Logo Design</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero qui reiciendis beatae itaque sunt hic non, officia quidem tempore laborum ipsum, aperiam rem. Itaque quam ducimus, soluta maiores voluptatem facilis.
          Deserunt fugiat quam, accusamus iusto saepe cumque laborum dolore eos aperiam ducimus dolores aspernatur doloremque est maxime dolorum modi. Reprehenderit eaque laboriosam nostrum pariatur quia dolore nam minus illum inventore!</p>
        </div>
        <div>
          <h2>Website Design</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero qui reiciendis beatae itaque sunt hic non, officia quidem tempore laborum ipsum, aperiam rem. Itaque quam ducimus, soluta maiores voluptatem facilis.
          Deserunt fugiat quam, accusamus iusto saepe cumque laborum dolore eos aperiam ducimus dolores aspernatur doloremque est maxime dolorum modi. Reprehenderit eaque laboriosam nostrum pariatur quia dolore nam minus illum inventore!</p>
        </div>
      </section>
      <section className="head-shot">
        <img src="images/head_Shot.jpeg" alt="head_shot" />
        <h1>too busy working on your stuff<span>.</span></h1>
        <h2>more coming <span>soon...</span></h2>
      </section>
      <Footer />
    </div >
  );
}



export default App;
