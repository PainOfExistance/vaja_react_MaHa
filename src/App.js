import logo from './source_files/logo.svg';
import './App.css';

function Neke() {
  return (
    <>
      <div>
        <p id='nekaj'>
          Neki tekst z druge funkcije
        </p>
        Neke drugi tekst
      </div>
      <span>nekaj</span>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Neke/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
