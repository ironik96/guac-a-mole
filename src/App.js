import "./App.css";
import { useState } from "react";
import Mole from "./components/Mole";
import Timer from "components/Timer";

const APPEAR = "mole-img";
const HIDE = "mole-img hidden-mole";
let ongoing = true;
let startingScore = 0;
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const random = () => Math.floor(Math.random() * 2);

function getDisplays() {
  let maxAppear = 0;
  return [...Array(5).keys()].map(() => {
    if (random() === 0 && maxAppear !== 2) {
      maxAppear++;
      return APPEAR;
    }
    return HIDE;
  });
}

function App() {
  const [displays, setDisplays] = useState(getDisplays());
  const [score, setScore] = useState(startingScore);
  if (ongoing) {
    console.log(ongoing);
    delay(1000).then((_) => setDisplays(getDisplays()));
  } else {
    console.log(ongoing);
  }
  const time = new Date();
  time.setSeconds(time.getSeconds() + 120);

  return (
    <div className="App">
      <header className="App-header">
        <div className="info">
          <Timer expiryTimestamp={time} onExpire={() => (ongoing = false)} />
          <h1>Score: {score}pts</h1>
        </div>
        <div className="board">
          <Mole display={displays[0]} setScore={setScore} ongoing={ongoing} />
          <Mole display={displays[1]} setScore={setScore} ongoing={ongoing} />
          <Mole display={displays[2]} setScore={setScore} ongoing={ongoing} />
          <Mole display={displays[3]} setScore={setScore} ongoing={ongoing} />
          <Mole display={displays[4]} setScore={setScore} ongoing={ongoing} />
        </div>
      </header>
    </div>
  );
}

export default App;
