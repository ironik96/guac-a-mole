import "./App.css";
import Mole from "./components/Mole";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="board">
          <Mole />
          <Mole />
          <Mole />
          <Mole />
          <Mole />
        </div>
      </header>
    </div>
  );
}

export default App;
