import logo from './logo.svg';
import './App.css';

const hello = 'Hello';
const sum = 34 + 50;
const number = 18;
const checkBox = true;
const flag = false;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style={{
          'color': 'green',
          'border': '1px solid #fff',
          'border-radius': 10 
        }}>{hello}</p>
        <p>{number}</p>
        <p>{sum}</p>
        <p>{checkBox && 'checkBox is true'}</p>
        <p>{flag ? 'flag is true' : 'flag is false'}</p>
        <p>{undefined}</p>
        <p>{null}</p>
        <p>{true}</p>
        <p>{false}</p>
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
