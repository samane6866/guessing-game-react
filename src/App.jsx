import { useState } from "react";
import "./App.css";
function random() {
  return Math.floor(Math.random() * 10 + 1);
}
function App() {
  const [numberRandom, setNumberRandom] = useState(random());
  const [valorInput, setValorInput] = useState(" ");
  const [restTry, setRestTry] = useState(1);
  const [previousGuess, setPreviousGuess] = useState([]);
  const [message, setShowMessage] = useState(" ");

  function handelValorIniciar() {
    console.log(valorInput, numberRandom);
    if (valorInput > numberRandom) {
      setShowMessage("is too high");
    } else if (valorInput < numberRandom) {
      setShowMessage("is to low");
    }

    setRestTry(restTry - 1);
    if (setRestTry === 0) {
      setShowMessage("YOU CAN CONTUNUE ANY MORE");
    }

    setPreviousGuess([...previousGuess, valorInput]);

    setValorInput(" ");
  }

  return (
    <>
      <h1>Number guessing game</h1>
      <p>Try and guess a random number between 1 and 100.</p>
      <p>You have {restTry} attempts to guess the right number.</p>
      <br />
      <div id="wrapper">
        <label htmlFor="guessField" id="guess">
          Guess a number
        </label>
        <input
          type="text"
          id="guessField"
          max={100}
          min={0}
          classn="guessField"
          value={valorInput}
          onChange={(e) => setValorInput(e.target.value)}
        />
        <button onClick={handelValorIniciar} className="guessSubmit">
          Submit a Guess
        </button>

        <div className="resultParas">
          <p>
            Previous Guesses:{" "}
            <span className="guesses">{previousGuess.join(",")}</span>
          </p>
          <p>
            Guesses Remaining: <span className="lastResult">{restTry}</span>
          </p>
          <p className="lowOrHi">{message}</p>
        </div>
      </div>
    </>
  );
}

export default App;
