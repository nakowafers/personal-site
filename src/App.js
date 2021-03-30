import './App.css';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <section>
        <img src="images/head_Shot.jpeg" alt="head_shot" />
        <h1>too busy working on your stuff<span>.</span></h1>
        <h2>more coming <span>soon...</span></h2>
      </section>
      <Footer />
    </div>
  );
}

export default App;
