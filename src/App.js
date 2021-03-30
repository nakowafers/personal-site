import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h2 className="brand-logo">nk.digital</h2>
        <div className="nav-burger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </header>
      <section>
        <img src="images/head_Shot.jpeg" alt="head_shot" />
        <h1>too busy working on your stuff<span>.</span></h1>
        <h2>more coming <span>soon...</span></h2>
      </section>
      <footer>
        <span className="footnote">© 2021 | Designed & coded with ❤️ by Nicola Kahale</span>
      </footer>
    </div>
  );
}

export default App;
