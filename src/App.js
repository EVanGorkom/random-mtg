import './App.css';
import Cards from './components/Cards'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="title">Welcome to the Random MTG card generator!</div>
      <div className="subtitle">Click the button to get a random card!</div>
        <Cards />
      </header>
    </div>
  );
}

export default App;
