import logo from './logo.svg';
import './App.css';
import { MiPrimerEstado } from './components/MiPrimerEstado';
import { Ejercicio1 } from './components/Ejercicio1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Use State - Hooks</h1>
        <MiPrimerEstado />
        <Ejercicio1 year={new Date().getFullYear()}></Ejercicio1>
      </header>
    </div>
  );
}

export default App;
