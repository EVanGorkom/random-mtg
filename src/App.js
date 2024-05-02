import './App.css';
import Cards from './components/Cards';
import Commander from './components/Commander';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="title">Welcome to the Random MTG Card Generator!</div>
        <div className="subtitle">Click any of the buttons below to generate a random magic card or commander.</div>
      </header>
      <div className="cards-container">
        <Commander />
        <Cards />
      </div>
    </div>
  );
}

export default App;
